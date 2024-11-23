class Solution(object):
    def asteroidCollision(self, asteroids):
        """
        :type asteroids: List[int]
        :rtype: List[int]
        """
        stack = []
        
        for i in asteroids:
            while stack and i < 0 < stack[-1]:
                if abs(i) > stack[-1]:
                    stack.pop()
                elif abs(i) == stack[-1]:
                    stack.pop()
                    break
                else:
                    break

            else:
                stack.append(i)
               
        
        return stack