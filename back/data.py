import random as r

class Db:
    def __init__(self):
        self.dict = {}

    def push(self, string):
        i = r.randint(1, 1000000)
        while i in self.dict:
            i = r.randint(1, 1000000)
        self.dict[str(i)] = string
        return 0, "success", str(i), string
    
    def pop(self, i, string):
        if i in self.dict:
            if self.dict[i] == string:
                return 0, "success", self.dict.pop(i)
            else:
                return 1, "id - string pair is not match", ""
        else:
            return 1, "invalid id value", ""
    
    def config(self):
        return len(self.dict)
