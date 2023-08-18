from main import (
    Block,
    Subject,
    conflictChecker,
    ConflictsBetweenTwoBlocks,
    arrayFormatter,
    blockMaker,
)

IT1101 = blockMaker(
    "IT1101",
    arrayFormatter("IT111", "Monday", 7, True, 10, True),
    arrayFormatter("FILI101", "Monday", 1, False, 2, False),
    arrayFormatter("FILI101#2", "Monday", 10, True, 12, False),
    arrayFormatter("GED103", "Thursday", 11, True, 1, False),
)

IT2101 = blockMaker(
    "IT2101",
    arrayFormatter("PE103", "Monday", 4, False, 6, False),
    arrayFormatter("PHY101", "Tuesday", 7, True, 9, True),
    arrayFormatter("PHY101#2", "Thursday", 7, True, 10, True),
    arrayFormatter("LITR2", "Wednesday", 7, True, 10, True),
    arrayFormatter("CPE405", "Wednesday", 10, True, 11, True),
)


conflictChecker(IT1101, IT2101)
