import random as r
import re
from crypt import crypt
class Db:
    def __init__(self):
        self.dict = {}

    def push(self, string):
        i = r.randint(1, 1000000)
        while i in self.dict:
            i = r.randint(1, 1000000)
        
        temp = ""
        key, l = crypt(string)
        keybag = []
        string = string.split()

        for j in range(l):
            key_r = r.randint(-5, 5)
            while not key_r:
                key_r = r.randint(-5, 5)
            save_key = key[j] + key_r
            if not save_key:
                save_key += key_r
            keybag.append(save_key)
            for c in string[j]:
                if re.match("[a-z]", c):
                    temp += chr((ord(c) + save_key - 97) % 26 + 97)
                elif re.match("[A-Z]", c):
                    temp += chr((ord(c) + save_key - 65) % 26 + 65)
                else:
                    temp += c

            if j != l - 1:
                temp += " "

        self.dict[str(i)] = [temp, keybag, l]
        return 0, "success", str(i), temp
    
    def pop(self, i, string):
        if i in self.dict:
            if self.dict[i][0] == string:
                temp = ""
                keybag, l = self.dict[i][1], self.dict[i][2]
                string = string.split()

                for j in range(l):
                    key = keybag[j]
                    for c in string[j]:
                        if re.match("[a-z]", c):
                            temp += chr((ord(c) - key - 97) % 26 + 97)
                        elif re.match("[A-Z]", c):
                            temp += chr((ord(c) - key - 65) % 26 + 65)
                        else:
                            temp += c
                    if j != l:
                        temp += " "

                self.dict.pop(i)
                return 0, "success", temp
            else:
                return 1, "invalid key - value pair.", ""
        else:
            return 1, "Key value does not exist.", ""
    
    def config(self):
        return len(self.dict)
