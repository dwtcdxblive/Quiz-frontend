import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json";
import "survey-core/survey.i18n";
import "survey-core/i18n/arabic";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
        const handleComplete = (sender, options) => {
        const surveyResponse = sender.data; // Assuming sender.data contains the survey response data
        postDataToServer(surveyResponse);
    };

    const postDataToServer = (data) => {
        fetch('http://46.19.74.196:5000/api/survey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Survey response sent successfully');
        })
        .catch(error => {
            console.error('Error sending survey response:', error);
        });
    };

    survey.onComplete.add(handleComplete);
        survey.locale = 'en';
    survey.applyTheme({
    "backgroundImageFit": "cover",
    "backgroundImageAttachment": "scroll",
    "backgroundOpacity": 1,
    "cssVariables": {
        "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
        "--sjs-general-backcolor-dim": "#F1F1F1",
        "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
        "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
        "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-primary-backcolor": "#602650",
        "--sjs-primary-backcolor-light": "rgba(96, 38, 80, 0.1)",
        "--sjs-primary-backcolor-dark": "rgba(81, 32, 68, 1)",
        "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-base-unit": "8px",
        "--sjs-corner-radius": "4px",
        "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
        "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
        "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
        "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
        "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
        "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
        "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
        "--sjs-special-red": "rgba(229, 10, 62, 1)",
        "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
        "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-green": "rgba(25, 179, 148, 1)",
        "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
        "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-blue": "rgba(67, 127, 217, 1)",
        "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
        "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
        "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-article-font-xx-large-textDecoration": "none",
        "--sjs-article-font-xx-large-fontWeight": "700",
        "--sjs-article-font-xx-large-fontStyle": "normal",
        "--sjs-article-font-xx-large-fontStretch": "normal",
        "--sjs-article-font-xx-large-letterSpacing": "0",
        "--sjs-article-font-xx-large-lineHeight": "64px",
        "--sjs-article-font-xx-large-paragraphIndent": "0px",
        "--sjs-article-font-xx-large-textCase": "none",
        "--sjs-article-font-x-large-textDecoration": "none",
        "--sjs-article-font-x-large-fontWeight": "700",
        "--sjs-article-font-x-large-fontStyle": "normal",
        "--sjs-article-font-x-large-fontStretch": "normal",
        "--sjs-article-font-x-large-letterSpacing": "0",
        "--sjs-article-font-x-large-lineHeight": "56px",
        "--sjs-article-font-x-large-paragraphIndent": "0px",
        "--sjs-article-font-x-large-textCase": "none",
        "--sjs-article-font-large-textDecoration": "none",
        "--sjs-article-font-large-fontWeight": "700",
        "--sjs-article-font-large-fontStyle": "normal",
        "--sjs-article-font-large-fontStretch": "normal",
        "--sjs-article-font-large-letterSpacing": "0",
        "--sjs-article-font-large-lineHeight": "40px",
        "--sjs-article-font-large-paragraphIndent": "0px",
        "--sjs-article-font-large-textCase": "none",
        "--sjs-article-font-medium-textDecoration": "none",
        "--sjs-article-font-medium-fontWeight": "700",
        "--sjs-article-font-medium-fontStyle": "normal",
        "--sjs-article-font-medium-fontStretch": "normal",
        "--sjs-article-font-medium-letterSpacing": "0",
        "--sjs-article-font-medium-lineHeight": "32px",
        "--sjs-article-font-medium-paragraphIndent": "0px",
        "--sjs-article-font-medium-textCase": "none",
        "--sjs-article-font-default-textDecoration": "none",
        "--sjs-article-font-default-fontWeight": "400",
        "--sjs-article-font-default-fontStyle": "normal",
        "--sjs-article-font-default-fontStretch": "normal",
        "--sjs-article-font-default-letterSpacing": "0",
        "--sjs-article-font-default-lineHeight": "28px",
        "--sjs-article-font-default-paragraphIndent": "0px",
        "--sjs-article-font-default-textCase": "none"
    },
    "themeName": "default",
    "colorPalette": "light",
    "isPanelless": false
}
    )
    return (<Survey model={survey} />);
}

export default SurveyComponent;

// import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
// import "survey-core/survey.i18n.js";
// import "survey-creator-core/survey-creator-core.i18n.js";
// import { surveyLocalization } from "survey-core";
// import { json } from "../json";
// import "survey-core/defaultV2.css";
// import "survey-creator-core/survey-creator-core.css";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// //Limited the number of showing locales in survey.locale property editor
// surveyLocalization.supportedLocales = ["en", "ar"];
// function SurveyCreatorRenderComponent() {
//     const options = {
//         showTranslationTab: true,
//         showLogicTab: true
//     };
//     const creator = new SurveyCreator(options);
//     // const survey = new Model(json)
//     creator.JSON = json;
// //         survey.applyTheme({
// //     "backgroundImageFit": "cover",
// //     "backgroundImageAttachment": "scroll",
// //     "backgroundOpacity": 1,
// //     "cssVariables": {
// //         "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
// //         "--sjs-general-backcolor-dim": "#F1F1F1",
// //         "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
// //         "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
// //         "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
// //         "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
// //         "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
// //         "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
// //         "--sjs-primary-backcolor": "#602650",
// //         "--sjs-primary-backcolor-light": "rgba(96, 38, 80, 0.1)",
// //         "--sjs-primary-backcolor-dark": "rgba(81, 32, 68, 1)",
// //         "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
// //         "--sjs-base-unit": "8px",
// //         "--sjs-corner-radius": "4px",
// //         "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
// //         "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
// //         "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
// //         "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
// //         "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
// //         "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
// //         "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
// //         "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
// //         "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
// //         "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
// //         "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
// //         "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
// //         "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
// //         "--sjs-special-red": "rgba(229, 10, 62, 1)",
// //         "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
// //         "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-special-green": "rgba(25, 179, 148, 1)",
// //         "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
// //         "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-special-blue": "rgba(67, 127, 217, 1)",
// //         "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
// //         "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
// //         "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
// //         "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
// //         "--sjs-article-font-xx-large-textDecoration": "none",
// //         "--sjs-article-font-xx-large-fontWeight": "700",
// //         "--sjs-article-font-xx-large-fontStyle": "normal",
// //         "--sjs-article-font-xx-large-fontStretch": "normal",
// //         "--sjs-article-font-xx-large-letterSpacing": "0",
// //         "--sjs-article-font-xx-large-lineHeight": "64px",
// //         "--sjs-article-font-xx-large-paragraphIndent": "0px",
// //         "--sjs-article-font-xx-large-textCase": "none",
// //         "--sjs-article-font-x-large-textDecoration": "none",
// //         "--sjs-article-font-x-large-fontWeight": "700",
// //         "--sjs-article-font-x-large-fontStyle": "normal",
// //         "--sjs-article-font-x-large-fontStretch": "normal",
// //         "--sjs-article-font-x-large-letterSpacing": "0",
// //         "--sjs-article-font-x-large-lineHeight": "56px",
// //         "--sjs-article-font-x-large-paragraphIndent": "0px",
// //         "--sjs-article-font-x-large-textCase": "none",
// //         "--sjs-article-font-large-textDecoration": "none",
// //         "--sjs-article-font-large-fontWeight": "700",
// //         "--sjs-article-font-large-fontStyle": "normal",
// //         "--sjs-article-font-large-fontStretch": "normal",
// //         "--sjs-article-font-large-letterSpacing": "0",
// //         "--sjs-article-font-large-lineHeight": "40px",
// //         "--sjs-article-font-large-paragraphIndent": "0px",
// //         "--sjs-article-font-large-textCase": "none",
// //         "--sjs-article-font-medium-textDecoration": "none",
// //         "--sjs-article-font-medium-fontWeight": "700",
// //         "--sjs-article-font-medium-fontStyle": "normal",
// //         "--sjs-article-font-medium-fontStretch": "normal",
// //         "--sjs-article-font-medium-letterSpacing": "0",
// //         "--sjs-article-font-medium-lineHeight": "32px",
// //         "--sjs-article-font-medium-paragraphIndent": "0px",
// //         "--sjs-article-font-medium-textCase": "none",
// //         "--sjs-article-font-default-textDecoration": "none",
// //         "--sjs-article-font-default-fontWeight": "400",
// //         "--sjs-article-font-default-fontStyle": "normal",
// //         "--sjs-article-font-default-fontStretch": "normal",
// //         "--sjs-article-font-default-letterSpacing": "0",
// //         "--sjs-article-font-default-lineHeight": "28px",
// //         "--sjs-article-font-default-paragraphIndent": "0px",
// //         "--sjs-article-font-default-textCase": "none"
// //     },
// //     "themeName": "default",
// //     "colorPalette": "light",
// //     "isPanelless": false
// // }
// //     )
//     return (<SurveyCreatorComponent creator={creator} />);
// }

// export default SurveyCreatorRenderComponent;