// SN_Systems_Evaluate_Exercise.cpp : définit le point d'entrée pour l'application console.
//

#include "stdafx.h"
#include <string>
#include <algorithm>

using namespace std;

// Operator constants based on ascii table
const int MULTIPLY = 42; // *
const int ADD =      43; // +
const int DIVIDE =   47; // /
const int SUBTRACT = 45; // -

// This allows numbers up to the order of max int which is 10-digits long
const int POWERS_OF_TEN[10] = { 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000 };

// Set zero offset based on ascii table
const int ZERO_OFF = 48;


// For easier string manipulation, I've chosen to use the built-in std::string class instead of const char*
bool evaluate(string expression, int & result)
{
	// declare local variables
	int lhs = 0;
	int rhs = 0;
	string subStr;
	char subChar;

	// Erase any existing whitespace from the expression
	if (expression.find(" ") != std::string::npos)
		expression.erase(std::remove(expression.begin(), expression.end(), ' '), expression.end());
	
	// Lambda to compute number from ascii digits
	auto getNumber = [](string subString)
	{
		int number = 0;
		size_t subSize = subString.size();
		for (size_t j = 0; j < subSize; ++j)
		{
			int digit = subString[j] - ZERO_OFF;
			number += digit * POWERS_OF_TEN[subSize - j - 1];
		}
		return number;
	};
	
	for (size_t i = 0; i < expression.size(); ++i)
	{
		subChar = expression[i];
		if (subChar == '(') // Open brace has been found
		{
			int subRes = 0;

			// Look for matching closed brace
			size_t index = expression.find_last_of(")");

			// No matching closing brace
			if (index == string::npos)
				return false;

			// By recursively calling evaluate, the expression is solved in reverse order
			if (!evaluate(expression.substr(i + 1, index - 1), subRes))
				return false;
			
			// Update subStr so that operator stage evaluates correctly
			subStr = std::to_string(subRes);

			// Move iterator to location of matching closed brace
			i += index;
		}
		else if (subChar > 47 && subChar < 58) // Numeric value has been found
		{
			subStr += subChar;
		}
		else if (subChar > 41 && subChar < 48) // Operator has been found
		{
			// Invalid characters
			if (subChar == 44 || subChar == 46)
				return false;

			// There must be a number on the lhs of an operator
			if (subStr.empty())
				return false;

			// Call lambda to compute lhs
			lhs = getNumber(subStr);

			// By recursively calling evaluate, the expression is solved in reverse order
			if (!evaluate(expression.substr(i + 1), rhs))
				return false;

			switch (subChar)
			{
			case MULTIPLY:
				result = lhs * rhs;
				return true;
			case ADD:
				result = lhs + rhs;
				return true;
			case DIVIDE:
				// Prevent 0 division
				if (rhs == 0)
					return false;
				result = lhs / rhs;
				return true;
			case SUBTRACT:
				result = lhs - rhs;
				return true;
			default:
				return false;
			}
		}
		else
		{
			return false;
		}
	}

	// There must be a number for the final result
	if (subStr.empty())
		return false;

	// Call lambda to compute final result
	result = getNumber(subStr);

	return true;
}

int main()
{
	int finalResult = 0;
	bool noErrors = false;

	// Test: "1 + 3 * 4", Ans: 13
	//noErrors = evaluate("1 + 3 * 4", finalResult);

	// Test: "1 + 3", Ans: 4
	//noErrors = evaluate("1 + 3", finalResult);

	// Test: "(1 + 3) * 2", Ans: 8
	//noErrors = evaluate("(1 + 3) * 2", finalResult);

	// Test: "(4 / 2) + 6", Ans: 8
	//noErrors = evaluate("(4 / 2) + 6", finalResult);

	// Test: "4 + (12 / (1 * 2))", Ans: 10
	//noErrors = evaluate("4 + (12 / (1 * 2))", finalResult);

	// Test: "(1 + (12 * 2)", Ans: Function returns false
	noErrors = evaluate("(1 + (12 * 2)", finalResult);
    return 0;
}

