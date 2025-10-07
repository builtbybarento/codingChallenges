// 1268. Search Suggestions System - Medium 

// Description:

// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

 

// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Explanation: The only word "havana" will be always suggested while typing the search word.
 

// Constraints:

// 1 <= products.length <= 1000
// 1 <= products[i].length <= 3000
// 1 <= sum(products[i].length) <= 2 * 104
// All the strings of products are unique.
// products[i] consists of lowercase English letters.
// 1 <= searchWord.length <= 1000
// searchWord consists of lowercase English letters.

// Solution:

function suggestedProducts(products: string[], searchWord: string): string[][] {
    class TrieNode{
        children: {[key:string]: TrieNode}
        isEnd: boolean
        words: string[]

        constructor(){
            this.children = {}
            this.isEnd = false
            this.words = []
        }
    }
    class Trie{
        root: TrieNode

        constructor(){
            this.root = new TrieNode
        }

        insert(word){
            let node = this.root
            for (const char of word){
                if (!node.children[char]){
                    node.children[char] = new TrieNode()
                }
                node = node.children[char]
                node.words.push(word)
            }
            node.isEnd = true
        }
        search(word){
            let res = []
            let node = this.root
            for (const char of word){
                if (!node.children[char]){
                    while(res.length < word.length){
                        res.push([])
                    }
                    break //should i be returning empty [] for every failed attempt after ? 
                } 
                node = node.children[char]  
                res.push(node.words.slice(0,3))
            }
            return res
        }
    }
    products = products.sort() //lexicographically sorted
    let productTrie = new Trie()

    for (const product of products){
        productTrie.insert(product)
    }
    return productTrie.search(searchWord)

};


//suggest at most 3 product names from products after each character of searchWord is typed. suggestions hsould have common prefix
//if there are more than three pproducts with commomn prefix return the three lexicographically minimums products
//ex searchword = "mouse" output: [mobile, moneypot, monitor], [mobile moneypot monitor] [mouse mousepad] [mouse mousepad][mouse mousepad]
    //starts with words that just start with m, mo, then mou(only 2 words), then mous, and finally mouse
//lecicographically minimums? i guess alphabetical order like mob, mon, over mou

//so i should probably create a trie here that will take all the words
//when searching, return the three that show up first i guess
//but how to know what letters to check? 
//so i need a functino to create the trie and a function to lookup the input letters and return the first 3 valid results