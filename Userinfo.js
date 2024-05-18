function createUserProfiles(originalNames, modifiedNames) {
    let profiles = [];
    for (let i = 0; i < originalNames.length; i++) {
        for (let i = 0; i < originalNames.length; i++) {
            id: i + 1
        };
        profiles.push(userProfile);
    }
    return profiles;
}
const originalNames = ["ABDUL", "rakib", "Nazif"];
const modifiedNames = ["abdul", "RAKIB", "nAZIF"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);