import { WebApiUrl } from "../../config"

const useSettings = () => {
    const url = WebApiUrl;

    const setSettings = async (styles = {
        detailButtonColour: "",
        headButtonsColour: "",
        headColour: "",
        imageUrl: "",
        orderButtonColour: "",
        payButtonColour: "",
        restaurantName: ""
    }) => {
        let body = {};

        if (styles.detailButtonColour) body.detailButtonColour = styles.detailButtonColour;
        if (styles.headButtonsColour) body.headButtonsColour = styles.headButtonsColour;
        if (styles.headColour) body.headColour = styles.headColour;
        if (styles.imageUrl) body.imageUrl = styles.imageUrl;
        if (styles.orderButtonColour) body.orderButtonColour = styles.orderButtonColour;
        if (styles.payButtonColour) body.payButtonColour = styles.payButtonColour;
        if (styles.restaurantName) body.restaurantName = styles.restaurantName;

        await fetch(url + "/api/settings/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        getSettings();
    }

    const setBgColor = (className, color) => {
        let elements = document.getElementsByClassName(className);
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = color;
        }
    }

    const getSettings = async () => {
        let stylesResp = await fetch(url + "/api/settings/get");

        if (stylesResp.ok) {
            let styles = await stylesResp.json();
            console.log(styles);
            if (styles.headColour) setBgColor("headerColour", styles.headColour);
            if (styles.headButtonsColour) setBgColor("headerButtonColour", styles.headButtonsColour);
            if (styles.orderButtonColour) setBgColor("orderButtonColour", styles.orderButtonColour);
            if (styles.detailButtonColour) setBgColor("detailButtonColour", styles.detailButtonColour);
            if (styles.payButtonColour) setBgColor("payButtonColour", styles.payButtonColour);

            return styles;
        }
    }

    return {
        get: getSettings,
        set: setSettings
    }
}

export default useSettings;