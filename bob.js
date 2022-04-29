export function hey(question) {
    if(question.charAt(question.length-1) == "?" && (question.length > 0) && (question.match(/[A-Z]/g) || []).length < 6) {
        return "Sure."
    } else if(question.charAt(question.length-1) == "?" && (question.length > 0) && (question.match(/[A-Z]/g) || []).length >= 6) {
        return "Calm down, I know what I'm doing!"
    } else if((question.length > 0) && (question.match(/[A-Z]/g) || []).length >= 2) {
        return "Whoa, chill out!"
    } else if(question.length == 0 || question.includes('silence')) {
        return "Fine. Be that way!"
    } else {
        return "Whatever."
    }
}
