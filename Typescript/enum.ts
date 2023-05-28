//enums are used as types at compile-time to achieve type-safety for the constants but they are treated as objects at runtime.

//numeric enum
enum SeatChoice {
    AISLE, //value 0 
    MIDDLE, //value 1
    WINDOW, //2
    FOURTH //3
}

enum SeatChoice1 {
    AISLE = 11,
    MIDDLE = 22,
    WINDOW, //23
    FOURTH
}


//for string enums, all enum members should be initialized
// enum SeatChoice2 {
//     AISLE = "aisle",
//     MIDDLE = "middle",
//     WINDOW = "window",
//     FOURTH 
// }

const hcSeat = SeatChoice.AISLE;

//heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
  }

  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */

type LogLevelStrings = keyof typeof LogLevel;
//The keyof operator takes an object type and produces a string or numeric literal union of its keys. 
//typeof operator gives you the type of an object
//keyof typeof comes into picture when we do not know the type of the object
// eg - const bmw = { name: "BMW", power: "1000hp" }
//This is where we use keyof typeof together.

//The typeof bmw gives you the type: { name: string, power: string }. keyof - literal type union

function Trial (key: LogLevelStrings ): void{
    const num = LogLevel[key];
    if(num <= LogLevel.WARN){
        console.log("yes");
    }
}
Trial('ERROR');

// because enums are treated as objects are runtime, need to use keyof typeof for enum
enum ColorsEnum {
    white = '#ffffff',
    black = '#000000',
}
//Here ColorsEnum exists as an object at runtime, not as a type. So, we need to invoke keyof typeof operators together as shown in the following code:

type Colors = keyof typeof ColorsEnum

let colorLiteral: Colors
colorLiteral = "white"  // OK
colorLiteral = "black"  // OK

//reverse mappings
enum Enum {
    A,
  }
   
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"

//enum is compiled into an object that stores both forward (name -> value) and reverse (value -> name) mappings
//Keep in mind that string enum members do not get a reverse mapping generated at all.


//const enums: To avoid paying the cost of extra generated code and additional indirection when accessing enum values, it’s possible to use const enums.

//ambient enum
declare enum Enum1 {
    A = 1,
    B,
    C = 2,
  }
export {};