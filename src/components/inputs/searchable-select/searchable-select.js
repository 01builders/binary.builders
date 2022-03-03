/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import classNames from "classnames";
import Typography from "../../typography";

import chevronDown from "./svg/arrow.svg";

import styles from "./searchable-select.module.scss";

const propTypes = {
  initialValue: PropTypes.string,
  focusOnMount: PropTypes.any,
  requiredInputLength: PropTypes.number,
  dropDownLength: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  clearInputOnSelect: PropTypes.bool,
  suppressReselect: PropTypes.bool,
  createCustomOption: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  content: PropTypes.string,
  hasToggle: PropTypes.bool,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
};

const SearchableSelect = ({
  initialValue = "",
  focusOnMount = true,
  requiredInputLength = 0,
  dropDownLength = Infinity,
  items,
  clearInputOnSelect = false,
  suppressReselect = true,
  createCustomOption = false,
  label,
  placeholder = "",
  content,
  hasToggle = false,
  className: propsClassName,
  isRequired = false,
  ...props
}) => {
  const [lastValidItem, setLastValidItem] = useState();
  const [currentInput, setCurrentInput] = useState(initialValue);
  const [matchingItems, setMatchingItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);
  const [interactionHappened, setInteractionHappened] = useState(false);

  const inputRef = useRef(null);

  
  useEffect(() => {

    const onClickCloseMenu = (event) => {
      const menu = document.getElementsByClassName(styles.list);
      if (!menu || !menu.length) return;
  
      // if rerender, items inside might change, allow one click without further checking
      if (interactionHappened) {
        setInteractionHappened(false);
        return;
      }
      // do not do anything if input is clicked, as we have a dedicated func for that
      const input = document.getElementsByClassName(styles["input-field"]);
      const toggle = document.getElementsByClassName(styles.chevron);
      if (!input) return;
      for (let i = 0; i < input.length; i += 1) {
        const targetIsInput = event.target === input[i];
        const targetInInput = input[i].contains(event.target);
        const targetIsToggle = event.target === toggle[0];
        if (targetIsInput || targetInInput || targetIsToggle) return;
      }
  
      // do not close menu if user clicked inside
      for (let i = 0; i < menu.length; i += 1) {
        const targetInMenu = menu[i].contains(event.target);
        const targetIsMenu = event.target === menu[i];
        if (targetInMenu || targetIsMenu) return;
      }
  
      if (visible) {
        setVisible(false);
        setFocusIndex(-1);
      }
    };

    window.addEventListener("click", onClickCloseMenu, false);
    return () => {
      window.removeEventListener("click", onClickCloseMenu);
    };
  }, [visible, interactionHappened]);

  useEffect(() => {
    if (focusOnMount && !currentInput) {
      inputRef.current.focus();
    }
  }, [focusOnMount, currentInput]);

  useEffect(() => {
    if (!currentInput && initialValue && !visible) {
      setCurrentInput(initialValue);
    }
  }, [currentInput, visible, initialValue]);

  const match = (current, item) => {
    return item.value.toLowerCase().indexOf(current.toLowerCase()) !== -1;
  };

  const indexOfItem = (item, displayableItems) =>
    displayableItems.indexOf(displayableItems.find((i) => i.key === item.key));

  const onClickInput = () => {
    const reachedRequiredLength = currentInput.length >= requiredInputLength;
    // if user clicks on input field with initialValue,
    // the user most likely wants to clear the input field
    if (initialValue && currentInput === initialValue) {
      setCurrentInput("");
    }

    if (reachedRequiredLength && !visible) {
      const matching = items
        ? items.filter((item) => {
            return match(currentInput, item);
          })
        : [];

      const currentInputIsLastItem =
        !clearInputOnSelect &&
        lastValidItem &&
        lastValidItem.label === currentInput;
      const displayableItems =
        matching.length && !currentInputIsLastItem
          ? matching.slice(0, dropDownLength)
          : items
          ? items.slice(0, dropDownLength)
          : [];

      let index =
        lastValidItem && !clearInputOnSelect
          ? indexOfItem(lastValidItem, displayableItems)
          : 0;
      index = index > 0 ? index : 0;

      setVisible(true);
      setMatchingItems(displayableItems);
      setFocusIndex(index);
    }
  };

  const onHandleInput = (event) => {
    const current = event.target.value;
    const matching = items
      ? items.filter((item) => {
          return item.label.toLowerCase().indexOf(current.toLowerCase()) !== -1;
        })
      : [];
    const displayableItems = matching.slice(0, dropDownLength);
    if (matching.length > 0) {
      setCurrentInput(current);
      setMatchingItems(displayableItems);
      setFocusIndex(0);
      setVisible(true);
    } else {
      setCurrentInput(current);
      setMatchingItems(displayableItems);
      setFocusIndex(-1);
    }
  };

  const onSelect = (selectedItem) => {
    if (
      suppressReselect &&
      lastValidItem &&
      selectedItem.value === lastValidItem.value
    ) {
      // do not trigger the callback function
      // but still change state to fit new selection
      setCurrentInput(clearInputOnSelect ? "" : selectedItem.label);
      setVisible(false);
      setFocusIndex(-1);
      setInteractionHappened(true);

      return;
    }
    // change state to fit new selection
    setCurrentInput(clearInputOnSelect ? "" : selectedItem.label);
    setLastValidItem(selectedItem);
    setVisible(false);
    setFocusIndex(-1);
    setInteractionHappened(true);

    // callback function onSelect
    props.onSelect(selectedItem, false);
  };

  const onHandleKeydown = (event) => {
    // only do something if drop-down div is visible
    if (!visible) return;
    let currentFocusIndex = focusIndex;
    if (event.keyCode === 40 || event.keyCode === 9) {
      // If the arrow DOWN key or tab is pressed increase the currentFocus variable:
      currentFocusIndex += 1;
      if (currentFocusIndex >= matchingItems.length) currentFocusIndex = 0;

      setFocusIndex(currentFocusIndex);

      // prevent tab to jump to the next input field if drop down is still open
      event.preventDefault();
    } else if (event.keyCode === 38) {
      // If the arrow UP key is pressed, decrease the currentFocus variable:
      currentFocusIndex -= 1;
      if (currentFocusIndex <= -1) currentFocusIndex = matchingItems.length - 1;
      setFocusIndex(currentFocusIndex);
    } else if (event.keyCode === 13) {
      // Enter pressed, similar to onClickItem
      if (focusIndex > -1) {
        // Simulate a click on the "active" item:
        const selectedItem = matchingItems[currentFocusIndex];
        onSelect(selectedItem);
      }
    }
  };

  const onClickItem = (event) => {
    event.preventDefault();
    // update the input value and close the dropdown again
    const elements = event.currentTarget.children;
    let selectedKey;
    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].tagName === "INPUT") {
        selectedKey = elements[i].value;
        break;
      }
    }
    const selectedItem = matchingItems.find(
      (item) => item.label === selectedKey
    );
    onSelect(selectedItem);
  };

  const renderItems = () => (
    <div className={styles.list}>
      {matchingItems.length > 0 &&
        _.range(matchingItems.length > 100 ? 100 : matchingItems.length).map(
          (i) => {
            const item = matchingItems[i];
            const isActive = focusIndex === i;
            const itemActiveClasses = isActive
              ? styles["suggestion-active"]
              : "";
            const itemClasses = `${styles.option} ${itemActiveClasses}`;
            return (
              <div
                onClick={(e) => {
                  onClickItem(e);
                }}
                onKeyPress={(e) => onClickItem(e)}
                className={itemClasses}
                key={item.value}
                tabIndex={0}
                role="button"
              >
                {item.label}
                <input type="hidden" value={item.label} readOnly />
              </div>
            );
          }
        )}
      {(!matchingItems || matchingItems.length === 0) && (
        <div
          className={styles.option}
          onClick={() => {
            onSelect({
              label: currentInput,
              value: currentInput,
            });
          }}
          tabIndex={0}
          role="button"
          onKeyUp={(event) => event.preventDefault()}
        >
          {createCustomOption ? `${content} ${currentInput}` : content}
          <input type="hidden" value={currentInput} readOnly />
        </div>
      )}
    </div>
  );

  const renderInputField = (reachedRequiredLength) => {
    return (
      <div className={styles.input}>
        <input
          ref={inputRef}
          onChange={onHandleInput}
          onClick={onClickInput}
          onKeyDown={onHandleKeydown}
          type="text"
          className={styles["input-field"]}
          placeholder={placeholder}
          value={currentInput}
        />
        {hasToggle && (
          <div
            className={styles.toggle}
            tabIndex={0}
            role="button"
            onClick={(e) => {
              onClickInput(e);
              inputRef.current.focus();
            }}
            onKeyDown={(e) => {
              onClickInput(e);
              inputRef.current.focus();
            }}
          >
            <img
              src={chevronDown}
              alt=""
              className={`
                    ${reachedRequiredLength && visible ? styles.open : ""}
                    ${styles.chevron}`}
            />
          </div>
        )}
      </div>
    );
  };

  const reachedRequiredLength = currentInput.length >= requiredInputLength;

  const className = classNames(styles.base, propsClassName);

  return (
    <div className={className}>
      {label && (
        <Typography variant="body1" color="black" component="span">
          {label + (isRequired ? "*" : "")}
        </Typography>
      )}
      {renderInputField(reachedRequiredLength)}
      {reachedRequiredLength && visible && renderItems()}
    </div>
  );
};

SearchableSelect.propTypes = propTypes;

export default SearchableSelect;
