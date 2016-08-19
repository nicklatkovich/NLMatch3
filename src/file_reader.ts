abstract class FileTextReader {
    public static read(fileName): string {
        var rawFile: XMLHttpRequest = new XMLHttpRequest();
        var result: string;
        rawFile.open("GET", fileName, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    result = rawFile.responseText.slice();
                }
            }
        };
        rawFile.send(null);
        return result;
    }
}
