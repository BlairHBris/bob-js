export function hey(question) {
    if(question.includes("?") && (question.length > 0) && (question.match(/[A-Z]/g) || []).length < 2) {
        return "Sure."
    } else if(question.includes("?") && (question.length > 0) && (question.match(/[A-Z]/g) || []).length >= 2) {
        return "Whoa, chill out!"
    } else if(question.length = 0) {
        return "Fine. Be that way!"
    } else {
        return "Whatever."
    }
}
