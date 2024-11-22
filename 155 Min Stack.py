
class MinStack(object):

    def __init__(self):
        self.stack = [] 
        self.min_stack = []

    def push(self, val):
        """
        :type val: int
        :rtype: None
        """

        self.stack.append(val)
        if  len(self.min_stack) == 0 or val <= self.min_stack[-1]:
            self.min_stack.append(val)

        
        

    def pop(self):
        """
        :rtype: None
        """
        if len(self.stack) != 0:
            if self.stack[-1] == self.min_stack[-1]:
                self.min_stack.pop()
            return self.stack.pop()
        else:
            return None           


    def top(self):
        """
        :rtype: int
        """
        if len(self.stack) != 0:
            return self.stack[-1]
        else:
            return None

    def getMin(self):
        """
        :rtype: int
        """
        if len(self.min_stack )!= 0:
            return self.min_stack[-1]
        else:
            return None        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()