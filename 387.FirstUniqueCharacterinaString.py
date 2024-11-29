# Solution 01:
class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        que = deque(s)
        dict1 = {}

        for i,c in enumerate(s):
            if c in dict1:
                dict1[c] += 1
            else:
                dict1[c] = 1
        i = 0
        while que:
            front = que.popleft()
            if dict1[front] == 1:
                return i
            i += 1
        return -1
    
# Solution 02:
        # dict1 = {}
        # for c in s:
        #     if c in dict1:
        #         dict1[c] += 1
        #     else:
        #         dict1[c] = 1

        # for i,c in enumerate(s):
        #     if dict1[c] == 1:
        #         return i

        # return -1