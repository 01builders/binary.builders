import React, {useEffect} from "react";

import styles from '../binary-builders.module.scss';


const ContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='//js-eu1.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    target: '#hubspotForm',
                    region: "eu1",
                    portalId: "144577018",
                    formId: "0f3b2fd1-a8f1-46c0-a8e6-16d0f646ef90"
                })
            }
        });
    }, []);

    return (
        <div>
            <div class={styles.form} id="hubspotForm"></div>
        </div>
    );

}

export default ContactForm;