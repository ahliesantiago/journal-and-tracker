import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

addRxPlugin(RxDBDevModePlugin); // optional dev-mode plugin

const db = await createRxDatabase({
  name: 'journaldb',
  storage: getRxStorageDexie()
});