const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const N = Number(stdin[0]);
const lectures = stdin.slice(1).map(line => line.split(' ').map(Number));

// 시작 시간을 기준으로 정렬
lectures.sort((a, b) => a[0] - b[0]);

// 🔹 **Min Heap (최소 힙) 직접 구현**
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    peek() {
        return this.heap[0] ?? Infinity;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) smallest = leftIdx;
            if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) smallest = rightIdx;
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

// 🔹 **최소 힙 사용**
const minHeap = new MinHeap();
minHeap.push(lectures[0][1]); // 첫 강의의 종료 시간을 추가

for (let i = 1; i < N; i++) {
    const [start, end] = lectures[i];

    // 현재 가장 빨리 끝나는 강의실이 새 강의 시작보다 먼저 끝나면 제거
    if (minHeap.peek() <= start) {
        minHeap.pop();
    }

    // 새로운 강의 종료 시간 추가
    minHeap.push(end);
}

// 🔹 **필요한 강의실 개수 출력**
console.log(minHeap.size());
