class RecentCounter(object):

    def __init__(self):
        self.queue = deque()
        # self.records = []
        # self.start = 0


    def ping(self, t):
        """
        :type t: int
        :rtype: int
        """
        self.queue.append(t)
        # if self.queue[0] >= t -3000 and  self.queue[0] <= t:
        #     return len(self.queue)
        # else:
        #     self.queue.popleft()
        #     return len(self.queue)
        # -------------------------
        while self.queue[0] < t -3000 or self.queue[0] > t:
            self.queue.popleft()

        return len(self.queue)
        # ---------------------------
        # self.records.append(t)
        # while self.records[self.start] < t - 3000:
        #     self.start += 1
        # return len(self.records) - self.start



# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)