/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In principal 1 - .this is referenced in a global scope, and is exposed to the top level hiarchy of scope.
 * 2. In principlal 2 - .this is referenced implicitly from its caller on an origin object. This has implyed permissions/scope for actions from its parent/caller object.
 * 3. 
 * 4. direct manipulation of an object by its caller/parent
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const wrkObj = {
    message: 'Test',
    action: function() {
        console.log("implicit this: === ", this);
        return (`${this.message}`, this);
    }
};

console.log(wrkObj.action())
    // Principle 3

// code example for New Binding
function jbObj(perfObj) {
    this.title = perfObj.title;
    this.wklength = perfObj.wklength;
    this.doWork = function() {
        console.log(`Do New Work`, this);
        return `I worked as a ${this.title}, for ${this.wklength} years`;
    }
};
const Joseph = new jbObj({ title: 'Business Analyst', wklength: 8 });
console.log(Joseph.doWork());

// Principle 4

// code example for Explicit Binding


//function wkObj(acObj) {
//this.wkType = acObj.wkType;
//this.wklength = acObj.wklength;
//return (this.wkType);
//};

const work = new jbObj({ title: 'hard worker', wklength: ' a long time in' });

const timeoff = new jbObj({ title: "easy", wklength: "too short" });

console.log(Joseph.doWork.call(work));