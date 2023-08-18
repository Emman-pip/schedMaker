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
