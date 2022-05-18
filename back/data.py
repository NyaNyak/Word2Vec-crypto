import random as r

class Db:
    def __init__(self):
        self.dict = {}

    def push(self, string):
        i = r.randint(1, 1000000)
        while i in self.dict:
            i = r.randint(1, 1000000)
        
        temp = ""
        key = r.randint(1, 10)
        for c in string:
            if c == " ":
                temp += " "
            else:
                temp += chr((ord(c) + key - 97) % 26 + 97)

        self.dict[str(i)] = [temp, key]
        return 0, "success", str(i), temp
    
    def pop(self, i, string):
        if i in self.dict:
            if self.dict[i][0] == string:
                temp = ""
                key = self.dict[i][1]
                for c in string:
                    if c == " ":
                        temp += " "
                    else:
                        temp += chr((ord(c) - key - 97) % 26 + 97)
                self.dict.pop(i)
                return 0, "success", temp
            else:
                return 1, "invalid key - value pair.", ""
        else:
            return 1, "Key value does not exist.", ""
    
    def config(self):
        return len(self.dict)
