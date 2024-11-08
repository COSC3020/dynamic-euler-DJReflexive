# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

# Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?


## My Runtime Analysis

For just the factorial() function, the first thing that is checked is whether $n$ is negative or 0. If it is either of these, the runtime is constant. The worst case runtime for $n > 0$ is a linear runtime ($\Theta(n)$) for factorial() because it starts from the base case, and builds up the final result from there. No repeated operations occur.

For the e() function, is it similar with the initial checks and for loop structure, but we call factorial() itself for every iteration of the for loop. For the worst case, this results in a double-nested for loop, meaning e() has a time complexity of $\Theta(n^2)$ since both for loops are linear, but are nested, creating a quadratic growth.

# Sources

- None!

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.