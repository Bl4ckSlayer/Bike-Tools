import React from "react";

const Blogs = () => {
  return (
    <div className="m-12">
      <div class="collapse  collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium ">
          <h1 className="text-black font-bold text-2xl">
            How will you improve the performance of a React Application?
          </h1>
        </div>
        <div class="collapse-content">
          <p className="text-xl text-warning">
            Optimizing performance in a React application: Keeping component
            state local where necessary. emoizing React omponents to prevent
            unnecessary re renders. Code splitting in React using dynamic
            import() Windowing or list virtualization in React. Lazy loading
            images in React. The solution is to create a functional component
            that will collect all props and redistribute them to other
            components.
          </p>
        </div>
      </div>
      <div class="collapse  collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium ">
          <h1 className="text-black font-bold text-2xl">
            {" "}
            What are the different ways to manage a state in a React
            application?
          </h1>
        </div>
        <div class="collapse-content">
          <p className="text-xl text-warning">
            React applications are built using components and they manage their
            state internally and it works well for applications with few
            components, but when the application grows bigger, the complexity of
            managing states shared across components becomes difficult. There
            are four main types of state you need to properly manage in your
            React apps:Local state, Global state,Server state, URL state.
          </p>
        </div>
      </div>
      <div class="collapse  collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium ">
          <h1 className="text-black font-bold text-2xl">
            How does prototypical inheritance work?
          </h1>
        </div>
        <div class="collapse-content">
          <p className="text-xl text-warning">
            Every object, along with its methods and properties, has a secret
            internal property called [[Prototype]]. Prototypal inheritance is a
            javascript feature that allows you to add methods and properties to
            objects. It's a method that allows one object to inherit the
            properties and methods of another. We use Object.getPrototypeOf and
            Object.setPrototypeOf to get and set the [[Prototype]] of an object,
            respectively.
          </p>
        </div>
      </div>
      <div class="collapse  collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium ">
          <h1 className="text-black font-bold text-2xl">
            Why you do not set the state directly in React?
          </h1>
        </div>
        <div class="collapse-content">
          <p className="text-xl text-warning">
            Because of the following, it is never a good idea to change the
            state directly: If you alter it directly, executing setState()
            subsequently might just overwrite your changes. This.state does not
            change instantly when you directly update the state. Instead, it
            generates a pending state transition, which will only return the
            current value when accessed after calling this function..
          </p>
        </div>
      </div>
      <div class="collapse  collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium ">
          <h1 className="text-black font-bold text-2xl">
            What is a unit test? Why should write unit tests?
          </h1>
        </div>
        <div class="collapse-content">
          <p className="text-xl text-warning">
            Unit tests are automated tests designed and executed by software
            engineers to confirm that a piece of an application (referred to as
            a unit matches its design and operates as intended.Before code is
            deployed, unit testing verifies that it meets quality criteria. This
            promotes a stable engineering environment that prioritizes quality.
            Unit testing saves time and money during the product development
            life cycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
