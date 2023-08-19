class Block:
    def __init__(self, block):
        self.block = block

    subjects = {}

    def __del__(self):
        pass


class Subject:
    def __init__(self, day, start, isStartAM, end, isEndAM):
        # self.name = title
        self.day = day
        self.start = start
        self.isStartAM = isStartAM
        self.end = end
        self.isEndAM = isEndAM

    def summary(self):
        print(self.day, self.start, self.isStartAM, self.end, self.isEndAM)


# code would have been much more concise if the
def conflictChecker(block1, block2):
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
                        or value.start == value2.start
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


def arrayFormatter(title, day, startTime, ifStartAM, end, ifEndAM):
    return [title, day, startTime, ifStartAM, end, ifEndAM]


def blockMaker(blockSection, *args):
    # array arranged as [block, course, title, day, startTime, ifStartAM, end, ifEndAM]
    # print(list(args))
    argsInList = list(args)
    for arg in argsInList:
        block = Block(blockSection)
        i = 0
        while i < len(arg):
            block.subjects[arg[0]] = Subject(arg[1], arg[2], arg[3], arg[4], arg[5])
            i += 1
    return block
