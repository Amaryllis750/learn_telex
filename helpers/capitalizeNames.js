const capitalizeNames = (requestObject) => {
    const namesToBeCapitalized = (requestObject.settings.find(element => element.label === "nameToCapitalize")).default.split(',');
    let message = requestObject.message;

    namesToBeCapitalized.forEach(element => {
        message = message.replaceAll(element, capitalize(element));
    });

    return message;
}

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = capitalizeNames