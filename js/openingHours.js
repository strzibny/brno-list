/**
 * Decides whether current time is within provided opening hours
 * @param {Object} opening hours
 */
function isOpenNow(openingHours) {
    return isOpenAt(openingHours, new Date());
}

/**
 * Decides whether provided time is within provided opening hours
 * @param {Object} opening hours
 * @param {Date} time
 */
function isOpenAt(openingHours, time) {
    var open = false,
        dayOfWeek = getShortDayNameByOrder(time.getDay());

    if (!openingHours[dayOfWeek]) {
        // opening hours are not defined for particular day
        return false;
    }

    var times = openingHours[dayOfWeek].split("-"),
        from = times[0],
        to = times[1],
        current = moment(time).format("HH:mm");

    // check that provided time is between opening and closing time
    if (current >= from && current < to) {
        open = true;
    }

    if (current >= from && from > to) {
        open = true;
    }

    // check the previous day
    var prevDay = time.getDay() - 1,
        prevDayFix = (prevDay === -1) ? 6 : prevDay,
        prevDayOfWeek = getShortDayNameByOrder(prevDayFix);

    if (openingHours[prevDayOfWeek]) {
        var prevTimes = openingHours[prevDayOfWeek].split("-"),
            prevFrom = prevTimes[0],
            prevTo = prevTimes[1];

        // is venue still opened from yesterday (after midnight)?
        if (current < prevTo && prevTo < prevFrom) {
            open = true;
        }
    }

    return open;
}

/**
 * Translates day order (0-6) to three letter representation
 * @param {integer} order
 * @return {string} short day name
 */
function getShortDayNameByOrder(order) {
    var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[order];
}
