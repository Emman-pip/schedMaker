from main import Block, Subject, conflictChecker, ConflictsBetweenTwoBlocks

IT1101 = Block("IT1101")
IT1101.subjects["IT111"] = Subject("Monday", 7, True, 10, True)
IT1101.subjects["FILI101"] = Subject("Monday", 1, False, 2, False)
IT1101.subjects["FILI101#2"] = Subject("Monday", 10, True, 12, False)
IT1101.subjects["GED103"] = Subject("Thursday", 11, True, 1, False)

IT2101 = Block("IT2101")
IT2101.subjects["PE103"] = Subject("Monday", 4, False, 6, False)
# IT2101.subjects["PE103"] = Subject("Monday", 7, True, 11, True)
IT2101.subjects["PHY101"] = Subject("Tuesday", 7, True, 9, True)
IT2101.subjects["PHY101#2"] = Subject("Thursday", 7, True, 10, True)
# IT2101.subjects["PHY101#2"] = Subject("Thursday", 11, True, 5, False)
IT2101.subjects["LITR2"] = Subject("Wednesday", 7, True, 10, True)
IT2101.subjects["CPE405"] = Subject("Wednesday", 10, True, 11, True)

ConflictsBetweenTwoBlocks([IT1101], [IT2101])
