import React from 'react';

import { ReactComponent as AlertCircle } from './alert-circle.svg';
import { ReactComponent as AlertCircleFilled } from './alert-circle-filled.svg';
import { ReactComponent as AlignCenter } from './align-center.svg';
import { ReactComponent as AlignLeft } from './align-left.svg';
import { ReactComponent as AlignRight } from './align-right.svg';
import { ReactComponent as Anchor } from './anchor.svg';
import { ReactComponent as ArrowDown } from './arrow-down.svg';
import { ReactComponent as Bold } from './bold.svg';
import { ReactComponent as BulletList } from './bullet-list.svg';
import { ReactComponent as Check } from './check.svg';
import { ReactComponent as Check1 } from './check-1.svg';
import { ReactComponent as Check2 } from './check-2.svg';
import { ReactComponent as Check3 } from './check-3.svg';
import { ReactComponent as Check4 } from './check-4.svg';
import { ReactComponent as Clock } from './clock.svg';
import { ReactComponent as CreditCard } from './credit-card.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Download } from './download.svg';
import { ReactComponent as Duplicate } from './duplicate.svg';
import { ReactComponent as Edit } from './edit.svg';
import { ReactComponent as Fail } from './fail.svg';
import { ReactComponent as FontSize } from './font-size.svg';
import { ReactComponent as Frown } from './frown.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as HorizontalRule } from './horizontal-rule.svg';
import { ReactComponent as IndentLeftIncrease } from './indent-left-increase.svg';
import { ReactComponent as IndentLeftDecrease } from './indent-left-decrease.svg';
import { ReactComponent as Italic } from './italic.svg';
import { ReactComponent as Left } from './left.svg';
import { ReactComponent as LineHeight } from './line-height.svg';
import { ReactComponent as Loader } from './loader.svg';
import { ReactComponent as Meh } from './meh.svg';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as MenuHorizontal } from './menu-horizontal.svg';
import { ReactComponent as QuestionMark } from './question-mark.svg';
import { ReactComponent as Redo } from './redo.svg';
import { ReactComponent as Right } from './right.svg';
import { ReactComponent as RightCard } from './right-card.svg';
import { ReactComponent as Scan } from './scan.svg';
import { ReactComponent as Smile } from './smile.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Trash } from './trash.svg';
import { ReactComponent as Underline } from './underline.svg';
import { ReactComponent as Undo } from './undo.svg';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Upload } from './upload.svg';
import { ReactComponent as View } from './view.svg';
import { ReactComponent as Warning } from './warning.svg';
import { ReactComponent as X } from './x.svg';
import { ReactComponent as XCircle } from './x-circle.svg';

export const map = {
  alertCircle: <AlertCircle />,
  alertCircleFilled: <AlertCircleFilled />,
  alignCenter: <AlignCenter />,
  alignLeft: <AlignLeft />,
  alignRight: <AlignRight />,
  anchor: <Anchor />,
  arrowDown: <ArrowDown />,
  bold: <Bold />,
  bulletList: <BulletList />,
  check: <Check />,
  check1: <Check1 />,
  check2: <Check2 />,
  check3: <Check3 />,
  check4: <Check4 />,
  clock: <Clock />,
  creditCard: <CreditCard />,
  down: <Down />,
  download: <Download />,
  duplicate: <Duplicate />,
  edit: <Edit />,
  fail: <Fail />,
  fontSize: <FontSize />,
  frown: <Frown />,
  heart: <Heart />,
  horizontalRule: <HorizontalRule />,
  italic: <Italic />,
  indentLeftIncrease: <IndentLeftIncrease />,
  indentLeftDecrease: <IndentLeftDecrease />,
  left: <Left />,
  lineHeight: <LineHeight />,
  loader: <Loader />,
  meh: <Meh />,
  menu: <Menu />,
  menuHorizontal: <MenuHorizontal />,
  questionMark: <QuestionMark />,
  redo: <Redo />,
  right: <Right />,
  rightCard: <RightCard />,
  scan: <Scan />,
  smile: <Smile />,
  star: <Star />,
  trash: <Trash />,
  underline: <Underline />,
  undo: <Undo />,
  up: <Up />,
  upload: <Upload />,
  view: <View />,
  warning: <Warning />,
  x: <X />,
  xCircle: <XCircle />,
};

export const AVAILABLE_ICONS = Object.keys(map).reduce(
  (acc, name) => ({ ...acc, [name.toUpperCase()]: name }),
  {}
);
