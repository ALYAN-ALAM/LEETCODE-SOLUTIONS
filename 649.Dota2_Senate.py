class Solution(object):
    def predictPartyVictory(self, senate):
        """
        :type senate: str
        :rtype: str
        """
        dire = deque()
        radiant = deque()

        senate_list = list(senate)

        for i,c in enumerate(senate_list):
            if c == "R":
                radiant.append(i)

            elif c == "D":
                dire.append(i)
            # else:
            #     return None


        while dire and radiant:
            d_val = dire.popleft()
            r_val = radiant.popleft()

            if r_val < d_val:
                radiant.append(r_val + len(senate_list))
            else:
                dire.append(d_val+len(senate_list))



        if radiant:
            return "Radiant"
        else:
            return "Dire"
s