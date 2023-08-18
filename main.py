class Block:
    def __init__(self, block):
        self.block = block

    subjects = {}


class Subject:
    def __init__(self, day, start, isStartAM, end, isEndAM):
        # self.name = title
        self.day = day
        self.start = start
        self.isStartAM = isStartAM
        self.end = end
        self.isEndAM = isEndAM


def conflictChecker(block1, block2="nothing"):
    for key, value in block1.subjects.items():
        for key2, value2 in block2.subjects.items():
            # if value.day is the same:
            if key != key2:
                if value.day != value2.day:
                    continue
                # print(block2.subjects.keys())
                # print(key in block2.subjects.keys() and key2 in block2.subjects.keys())
                if value.isStartAM == value2.isStartAM:
                    # TODO: if from the same block yung subject -> skip iteration
                    if (
                        value.start < value2.start < value.end
                        or value2.start < value.start < value2.end
                        or value.start < value2.end < value.end
                        or value2.start < value.end < value2.end
                        # or value.start == value.start
                        or (value.start == value2.start and value.end == value2.end)
                    ):
                        print(
                            f"Conflict of schedule:  {key} in block {block1.block} and {key2} in block:{block2.block}"
                        )
                        return
                else:
                    continue
            else:
                continue
    print(f"No conflicts between {block1.block} and {block2.block}")
    return


def ConflictsBetweenTwoBlocks(array1, array2):
    for obj in array1:
        for obj2 in array2:
            conflictChecker(obj, obj2)
    print("DONE")
    return


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
IT2101.subjects["LITR2"] = Subject("Wednesday", 7, True, 10, True)
IT2101.subjects["CPE405"] = Subject("Wednesday", 10, True, 11, True)

ConflictsBetweenTwoBlocks([IT1101], [IT2101])
