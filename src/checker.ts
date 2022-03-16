function isPalindrome(text: string): boolean {
    console.log(text);
    text = text.toLowerCase();
    for (let i = 0, j = text.length - 1; i < j; i++) {
        if (text[i] != text[j])
            return false; // Not a palindrome
    }

    return true; // Did not find mismatches, palindrome
}

export default isPalindrome;