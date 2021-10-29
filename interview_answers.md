# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component controls how the state changes and fulfilling component logic.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    A componentWillMount function will be called when the render method is invoke or accessing initial data.
    A componentWillUpdate function will be called when setState is used to change the component's state date.

3. Define stateful logic.
    Stateful logic is reuseable code that uses state.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange: Render your component/React element into the virtual DOM
    Act: Mount your component... find/getting element
    Assert: Verify element has indeed been rendered.