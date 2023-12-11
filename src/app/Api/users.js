export default async function users () {
    try {
        let fetchData = await fetch("http://localhost:4003/user");
        let getData = await fetchData.json();
        return getData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};