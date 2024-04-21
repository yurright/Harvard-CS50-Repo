# Solidity : Implementing Lecture Ideas to Solidity

## Data Types

Solidity, a statically typed language used primarily for writing smart contracts on the Ethereum blockchain, offers a variety of data types that can be broadly categorized into **value types** and **reference types**. Here's a detailed overview of each category and the data types it includes:

### Value Types
Value types in Solidity store data directly and are always passed by value, meaning that they are copied when they are used as function arguments or in assignments. Here are the main value types in Solidity:

1. **Boolean (`bool`)**: Represents binary values, typically `true` or `false`.Booleans in Solidity are used to represent true or false values and occupy 1 byte (8 bits) of memory
2. **Integer**:
   - **Signed Integers (`int`)**: These can represent both negative and positive values. The default is `int256`, but it can range from `int8` to `int256` in steps of 8 bits. The size of signed integers (int) can range from 8 bits (int8) to 256 bits (int256) in increments of 8 bits. For example, int8 occupies 1 byte, while int256 occupies 32 bytes.
   - **Unsigned Integers (`uint`)**: These represent non-negative values, with `uint256` being the default. Like signed integers, they can range from `uint8` to `uint256`.Unsigned integers (uint) also range from 8 bits (uint8) to 256 bits (uint256). Similarly, uint8 occupies 1 byte, and uint256 occupies 32 bytes.
3. **Fixed Point Numbers**: These are not fully supported yet in Solidity. They can be declared as `fixed` and `ufixed` for signed and unsigned fixed-point numbers of varying sizes, respectively.Solidity's fixed-point numbers are not fully supported yet, but they would be represented as fixedMxN/ufixedMxN where M represents the number of bits taken by the type and N represents the decimal points. M should be divisible by 8 and goes from 8 to 256. N can be from 0 to 80.
4. **Address**:
   - **Regular Address (`address`)**: Holds a 20-byte value, typically used for Ethereum addresses.Holds a 20-byte (160 bits) value, which corresponds to the size of an Ethereum address
   - **Payable Address (`address payable`)**: Similar to regular addresses but can receive Ether. Same size as a regular address, 20 bytes (160 bits), but can receive Ether
5. **Bytes (`bytes1` to `bytes32`)**: Fixed-sized byte arrays, useful for storing data of known size. Fixed-size byte arrays, where bytes1 is 1 byte (8 bits) and bytes32 is 32 bytes (256 bits)
6. **Enums**: User-defined types for creating readable and maintainable code by assigning names to integral constants[1][2][4][5].

### Reference Types
Reference types do not store the data directly but store a reference to the location of the data. They are passed by reference, meaning that if the data is modified through one reference, the change is visible through all references. Here are the main reference types in Solidity:

1. **Arrays**: Can be fixed-size or dynamically-sized and hold elements of the same type. The size of an array in Solidity depends on the element type and the array length. For example, an array of uint256 with 10 elements will occupy 320 bytes (10 elements * 32 bytes each)
2. **Structs**: Custom defined types that can group several variables. The size of a struct is the sum of the sizes of its individual elements
3. **Mappings**: Hash tables which implement an associative array that maps keys to values. Only the value types can be mappings. Mappings do not have a straightforward size like other types. They are key-value pairs where the key is not stored in the contract, but the value is. The size depends on the data type of the value
4. **Strings**: Dynamically-sized UTF-8-encoded string data. Strings are dynamically sized and can potentially vary in size. The actual size in memory depends on the string content

## Storage and Memory Considerations
In Solidity, variables can be stored in three locations: storage, memory, and stack. The choice of storage location significantly impacts gas costs and efficiency:
Storage: Persistent storage of contract state. Expensive in terms of gas cost.
Memory: Temporary storage during function execution. Cheaper than storage but more expensive than the stack.
Stack: Very limited size, used for small local variables
By understanding the memory size of each data type and choosing appropriate data types and storage locations, developers can optimize their contracts for better performance on the Ethereum blockchain.


## Type Casting




## References

