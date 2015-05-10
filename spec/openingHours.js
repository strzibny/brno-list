describe("Opening hours", function() {
    var openingHours = {
        "mon": "08:00-02:00",
        "tue": "08:00-20:00",
        "wed": "08:00-20:00",
        "thu": "08:00-20:00",
        "fri": "08:00-20:00",
        "sat": "08:00-03:00"
    };

    it("When time is set between opening and closing time, venue is open.", function() {
        var tuesdayInTheAfternoon = new Date(2014, 10, 18, 15, 15);
        var isOpenTuesdayInTheAfternoon = isOpenAt(openingHours, tuesdayInTheAfternoon);

        var mondayEvening = new Date(2014, 10, 29, 21, 00);
        var isOpenMondayEvening = isOpenAt(openingHours, mondayEvening);

        expect(isOpenTuesdayInTheAfternoon).toBe(true);
        expect(isOpenMondayEvening).toBe(true);
    });

    it("When opening hours are not defined for a particular day, venue is closed.", function() {
        var sunday = new Date(2014, 10, 16, 15, 15);
        var isOpen = isOpenAt(openingHours, sunday);

        expect(isOpen).toBe(false);
    });

    it("Opening hours can be set after midnight.", function() {
        var mondayAfterMidnight = new Date(2014, 10, 18, 1, 0);
        var mondayAfterMidnightTooLate = new Date(2014, 10, 18, 2, 0);

        var isOpenAfterMidnight = isOpenAt(openingHours, mondayAfterMidnight);
        var isOpenAfterMidnightTooLate = isOpenAt(openingHours, mondayAfterMidnightTooLate);

        expect(isOpenAfterMidnight).toBe(true);
        expect(isOpenAfterMidnightTooLate).toBe(false);
    });
});
