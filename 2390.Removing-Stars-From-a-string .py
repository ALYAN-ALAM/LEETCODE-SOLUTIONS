class Solution(object):
    def removeStars(self, s):
        """
        :type s: str
        :rtype: str
        """
        stack = []
        for char in s:
            if char != "*":
                stack.append(char)
            else:
                stack.pop()

        result_string = ""

        for char in stack:
            result_string = result_string + char
        
        return result_string