from main import (
    conflictChecker,
    ConflictsBetweenTwoBlocks,
    arrayFormatter,
    blockMaker,
)

# TODO: Fix weird bug when multiple blockMaker functions are called

IT1101 = blockMaker(
    "IT1101",
    arrayFormatter("IT111", "Monday", 7, True, 10, True),
    arrayFormatter("FILI101", "Monday", 1, False, 2, False),
    arrayFormatter("FILI101#2", "Monday", 10, True, 12, False),
    arrayFormatter("GED103", "Thursday", 11, True, 1, False),
)

IT1107 = blockMaker(
    "IT1107",
    arrayFormatter("IT111", "Monday", 2, False, 4, False),
    arrayFormatter("IT111#2", "Wednesday", 1, False, 4, False),
    arrayFormatter("FILI101", "Monday", 8, True, 10, True),
    arrayFormatter("FILI101#2", "Thursday", 11, True, 12, False),
    arrayFormatter("GED103", "Monday", 4, False, 7, False),
)


IT2101 = blockMaker(
    "IT2101",
    arrayFormatter("PE103", "Monday", 4, False, 6, False),
    arrayFormatter("PHY101", "Tuesday", 7, True, 9, True),
    arrayFormatter("PHY101#2", "Thursday", 7, True, 10, True),
    arrayFormatter("LITR2", "Wednesday", 7, True, 10, True),
    arrayFormatter("CPE405", "Wednesday", 10, True, 11, True),
)


IT2102 = blockMaker(
    "IT2102",
    arrayFormatter("CPE405", "Thursday", 3, False, 4, False),
    arrayFormatter("CPE405#2", "Friday", 1, False, 3, False),
    arrayFormatter("PE103", "Thursday", 4, False, 6, False),
    arrayFormatter("PHY101", "Tuesday", 1, False, 4, False),
    arrayFormatter("PHY101#2", "Thursday", 10, True, 12, True),
    arrayFormatter("LITR2", "Monday", 7, True, 9, True),
    arrayFormatter("LITR2#2", "Tuesday", 4, False, 5, False),
)

IT2103 = blockMaker(
    "IT2103",
    arrayFormatter("CPE405", "Friday", 10, True, 1, False),
    arrayFormatter("PE103", "Monday", 9, True, 11, True),
    arrayFormatter("PHY101", "Tuesday", 4, False, 7, False),
    arrayFormatter("PHY101#2", "Wednesday", 12, False, 2, False),
    arrayFormatter("LITR2", "Monday", 12, False, 3, False),
)

IT2104 = blockMaker(
    "IT2104",
    arrayFormatter("CPE405", "Tuesday", 7, True, 8, True),
    arrayFormatter("CPE405#2", "Friday", 2, False, 4, False),
    arrayFormatter("PE103", "Friday", 10, True, 12, False),
    arrayFormatter("PHY101", "Wednesday", 7, True, 10, True),
    arrayFormatter("PHY101#2", "Tuesday", 12, False, 3, False),
    arrayFormatter("LITR2", "Monday", 3, False, 4, False),
    arrayFormatter("LITR2#2", "Wednesday", 4, False, 6, False),
)

IT2105 = blockMaker(
    "IT2105",
    arrayFormatter("CPE405", "Monday", 7, True, 10, True),
    arrayFormatter("PE103", "Friday", 3, False, 5, False),
    arrayFormatter("PHY101", "Monday", 10, True, 12, True),
    arrayFormatter("PHY101#2", "Friday", 7, True, 10, True),
    arrayFormatter("LITR2", "Wednesday", 2, False, 4, False),
    arrayFormatter("LITR2#2", "Tuesday", 1, False, 2, False),
)


ConflictsBetweenTwoBlocks([IT1101], [IT2101])
for value in IT1101.subjects.values():
    print("IT1101\n", value.summary())

for key, value in IT2101.subjects.values():
    print("IT2101\n", key, value.summary())
