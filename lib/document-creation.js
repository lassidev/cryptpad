const { getFolderMetadata } = require('./folder-utils');

const createDocumentInFolder = async function (folderId, docData) {
    const folderMeta = await getFolderMetadata(folderId);

    if (folderMeta.folderRestricted) {
        docData.restricted = folderMeta.folderRestricted;
        docData.allowed = folderMeta.allowed;
    }

    const newDocId = await createDocument(docData);
    await addDocumentToFolder(folderId, newDocId);

    return newDocId;
};

module.exports = {
    createDocumentInFolder
};
