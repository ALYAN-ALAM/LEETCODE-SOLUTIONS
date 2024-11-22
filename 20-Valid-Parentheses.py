class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        dict_brackets = {")":"(","]":"[","}":"{"}
        stack = []

        for i in s:
            if i in dict_brackets:
                if len(stack ) != 0:
                    top_element_stack = stack.pop()
                    if top_element_stack != dict_brackets[i]: 
                        return False 
                else:
                    return False
            else:
               stack.append(i)

        if len(stack) == 0:
            return True
        else:
            return False

