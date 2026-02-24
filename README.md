1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

Answers:

1.In get element by id i can select a single element by id name ,In get elements class name i can select the similar class name elements.By query selector i can get its first element.and query selector all i can take the matching css class.

2.I can insert a new element in dom by using document.createElement().like document.createElement('div').
3.when i click on a element it goes to its parent element.if i click on a button inside a div, the button’s click event will runs first, then the div’s click event runs.

4.Event delegation is when i will put a single event listener on a parent element instead of adding listeners to each child. Then we check which child triggered the event. This is useful because it works for dynamic elements.

5.preventDefault() stops the browser.and other stopPropagation() method stops event from bubbling to the parent element.







