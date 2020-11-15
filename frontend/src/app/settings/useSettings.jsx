import * as config from "../../config"

const useSettings = () => {
    const url = config.WebApiUrl;

    const setSettings = async (newStyles = {
        detailButtonColour: "",
        headButtonsColour: "",
        headColour: "",
        imageUrl: "",
        orderButtonColour: "",
        payButtonColour: "",
        restaurantName: ""
    }) => {
        let body = {};

        if (newStyles.detailButtonColour) body.detailButtonColour = newStyles.detailButtonColour;
        if (newStyles.headButtonsColour) body.headButtonsColour = newStyles.headButtonsColour;
        if (newStyles.headColour) body.headColour = newStyles.headColour;
        if (newStyles.imageUrl) body.imageUrl = newStyles.imageUrl;
        if (newStyles.orderButtonColour) body.orderButtonColour = newStyles.orderButtonColour;
        if (newStyles.payButtonColour) body.payButtonColour = newStyles.payButtonColour;
        if (newStyles.restaurantName) body.restaurantName = newStyles.restaurantName;

        await fetch(url + "/api/settings/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return await getSettings();
    }

    const getSettings = async () => {
        let getSettingsResp = await fetch(url + "/api/settings/get");

        if (getSettingsResp.ok) {
            return await getSettingsResp.json();   
        }
    }

    return {
        set: setSettings,
        get: getSettings
    }
}

export default useSettings;