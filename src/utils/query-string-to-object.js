function queryStringToObject(queryString) {
    const removeQuestionMark = 1;
    const query = queryString.substring(removeQuestionMark);
    const queryStringData = query.split("&");

    const whenCheckValueAndName = (valueSplit, key, valueParams) => {
        return (
            valueSplit[key] &&
            valueSplit[valueParams] && {
                [valueSplit[key]]: valueSplit[valueParams],
            }
        );
    };

    const splitValueAndNameByEquals = (value, item) => {
        const valueSplit = value.split("=");
        const key = 0;
        const valueParams = 1;
        return {
            ...item,
            ...whenCheckValueAndName(valueSplit, key, valueParams),
        };
    };

    return queryStringData.reduce((item, value) => {
        return splitValueAndNameByEquals(value, item);
    }, {});
}

export default queryStringToObject;
