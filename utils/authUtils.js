const dayjs = require("dayjs");

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

module.exports = { formatDate };
