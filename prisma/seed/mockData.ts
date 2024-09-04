import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e1993105-f85b-4df2-b23e-b431aaebb5cd', '1Cheyanne_Sanford92@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv78901', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('3f4a258d-7a93-44ac-af57-a6891fdbf25b', '8Orlo86@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('d85dc2a5-413a-4b81-b691-19fc52980ae5', '15Alba31@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('d1f80112-11fc-4302-b18f-b1b585f227a9', '22Adeline.OReilly@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv44556', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('8901a314-f870-401f-a068-27941bc254a3', '36Alta9@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '43Carrie18@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv12345', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('67e392d2-3a28-4d31-940a-a64d3442ba70', '50Amie.Quigley2@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv12345', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('c90759d8-ee64-42e4-ab72-6a39f7814b07', '57Electa_Quigley-Nolan@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('139b32b1-1898-485b-a885-f8f339fca9dd', '64Pamela_Morar-Rowe64@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('a7729418-d844-4bd4-a7aa-b31c233e6a2d', 'Just had the best coffee ever', '139b32b1-1898-485b-a885-f8f339fca9dd');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('1a609aef-fa13-4273-8871-4cf5ded1c5c4', 'Feeling grateful for all the support.', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('25bbd78e-103f-4ee4-a597-7ce5db110a72', 'Cant believe the game last night', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('22a4ff23-a78c-40a2-91f1-648342f127dc', 'Cant believe the game last night', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('173c7f4b-e2c3-4730-95e1-2555b1986144', 'Just had the best coffee ever', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('582036fe-68da-4cd8-a2ee-49155e7c57f7', 'Reading a great book on mindfulness.', '3f4a258d-7a93-44ac-af57-a6891fdbf25b');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('56572899-308f-4e2f-b16a-6ad754c3b9c6', 'Reading a great book on mindfulness.', '8901a314-f870-401f-a068-27941bc254a3');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('430b489e-b153-4434-b61e-7fdc4084c6a3', 'Feeling grateful for all the support.', 'c90759d8-ee64-42e4-ab72-6a39f7814b07');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('beada2d9-5b58-4f94-95d5-c0ae5394bcc3', 'Anyone else excited for the weekend', 'd85dc2a5-413a-4b81-b691-19fc52980ae5');
INSERT INTO "Tweet" ("id", "content", "userId") VALUES ('c8d67300-236e-4c2e-87f8-9fcb9bd6e43b', 'Feeling grateful for all the support.', '139b32b1-1898-485b-a885-f8f339fca9dd');

INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('c1baf7a7-55d0-43a3-9e8e-2e7da54ea348', '3f4a258d-7a93-44ac-af57-a6891fdbf25b', '3f4a258d-7a93-44ac-af57-a6891fdbf25b');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('6d2ff58c-bfdc-4e35-9a2e-de51bb6f3081', '3f4a258d-7a93-44ac-af57-a6891fdbf25b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('b5ff1255-a2de-4c27-a586-e029c711dcfd', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('408eed0c-f4f9-4241-a3dd-8a752dd7e816', 'd1f80112-11fc-4302-b18f-b1b585f227a9', '8901a314-f870-401f-a068-27941bc254a3');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('700fcdbb-9e9a-4311-9260-d18942d9feea', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd1f80112-11fc-4302-b18f-b1b585f227a9');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('4387ce61-34f3-4128-a0c1-7e305313c8e3', '8901a314-f870-401f-a068-27941bc254a3', '8901a314-f870-401f-a068-27941bc254a3');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('8eda37b5-161b-45c4-ad89-9fa1dc01484a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('70785b6a-ad23-4f69-bf6d-07c2cbe21e30', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c90759d8-ee64-42e4-ab72-6a39f7814b07');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('95ec8c14-5f63-4b1c-9cea-ab715bf8d4e8', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '139b32b1-1898-485b-a885-f8f339fca9dd');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('2f091f19-ebbe-4a65-b5db-da5ce1734899', '139b32b1-1898-485b-a885-f8f339fca9dd', '139b32b1-1898-485b-a885-f8f339fca9dd');

INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('6d69b139-5c5c-4d61-8dea-3238adcf5ec8', '3f4a258d-7a93-44ac-af57-a6891fdbf25b', '173c7f4b-e2c3-4730-95e1-2555b1986144');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('655d8b97-1ce8-4e39-81de-ba980278dcd9', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('deaadbce-7338-45d2-b13f-f1f354f0db03', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '173c7f4b-e2c3-4730-95e1-2555b1986144');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('68715567-0020-452b-b2a1-aadae7a20fad', '8901a314-f870-401f-a068-27941bc254a3', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('584db399-83cb-4fb4-84e0-2af066426114', '3f4a258d-7a93-44ac-af57-a6891fdbf25b', 'a7729418-d844-4bd4-a7aa-b31c233e6a2d');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('beac3f92-26a9-4fd2-a13e-6e55b205305e', 'd1f80112-11fc-4302-b18f-b1b585f227a9', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('5f46cde4-20ea-4662-b2f3-ebbb28632f13', 'e1993105-f85b-4df2-b23e-b431aaebb5cd', '56572899-308f-4e2f-b16a-6ad754c3b9c6');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('244fa418-b0a2-4277-b6f3-4420434b453d', '8901a314-f870-401f-a068-27941bc254a3', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('d697f887-e859-46ca-970e-dd585c3d1d3c', 'e1993105-f85b-4df2-b23e-b431aaebb5cd', 'beada2d9-5b58-4f94-95d5-c0ae5394bcc3');
INSERT INTO "Like" ("id", "userId", "tweetId") VALUES ('63fce7ba-9645-4bc6-a9b0-d9f6375de601', 'd1f80112-11fc-4302-b18f-b1b585f227a9', '22a4ff23-a78c-40a2-91f1-648342f127dc');

INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('b5a72345-a90e-4aad-b158-f22a5ed9abe9', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('6d6fb225-6b1e-4935-9ce9-e54871940f65', 'd1f80112-11fc-4302-b18f-b1b585f227a9', '25bbd78e-103f-4ee4-a597-7ce5db110a72');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('97137b61-1009-490b-ad71-9866fc232f29', '8901a314-f870-401f-a068-27941bc254a3', '430b489e-b153-4434-b61e-7fdc4084c6a3');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('b31113e0-0997-4487-8fd2-d235bf8bb266', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '22a4ff23-a78c-40a2-91f1-648342f127dc');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('2352cf90-f587-4b71-8dcf-f0f0c517512b', '3f4a258d-7a93-44ac-af57-a6891fdbf25b', '25bbd78e-103f-4ee4-a597-7ce5db110a72');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('5a6519a8-272b-40eb-a77c-fa9c1f57bb10', '67e392d2-3a28-4d31-940a-a64d3442ba70', '430b489e-b153-4434-b61e-7fdc4084c6a3');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('3caaed36-29ee-4a93-81c5-5e38dde4306d', 'd1f80112-11fc-4302-b18f-b1b585f227a9', '25bbd78e-103f-4ee4-a597-7ce5db110a72');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('b21a15d2-80bb-4471-bc59-4ad7cc2e282a', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '430b489e-b153-4434-b61e-7fdc4084c6a3');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('2877eddc-13a4-4a71-a910-62a49dce7909', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '582036fe-68da-4cd8-a2ee-49155e7c57f7');
INSERT INTO "Retweet" ("id", "userId", "tweetId") VALUES ('865bd0a6-f240-40a0-8743-6a740bbcd7fd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '25bbd78e-103f-4ee4-a597-7ce5db110a72');

INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('f728ff73-74c8-4417-9609-ff8002ff4e86', 'I completely agree with your point.', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', 'beada2d9-5b58-4f94-95d5-c0ae5394bcc3');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('ab1314db-54c8-41ce-a8f6-0197090b6168', 'Thanks for sharing this information.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1a609aef-fa13-4273-8871-4cf5ded1c5c4');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('c9edad42-23f2-449d-ac10-79703e9c9898', 'Thanks for sharing this information.', '67e392d2-3a28-4d31-940a-a64d3442ba70', '56572899-308f-4e2f-b16a-6ad754c3b9c6');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('f41ddc23-67f2-4cff-a570-2b382253a175', 'Thanks for sharing this information.', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '1a609aef-fa13-4273-8871-4cf5ded1c5c4');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('236582dc-1550-4fc0-b70c-3a57a2bc5e64', 'I completely agree with your point.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '582036fe-68da-4cd8-a2ee-49155e7c57f7');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('afcc52f7-6d45-4400-9097-6314ad16f246', 'Thanks for sharing this information.', 'd1f80112-11fc-4302-b18f-b1b585f227a9', 'a7729418-d844-4bd4-a7aa-b31c233e6a2d');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('ad07e5f9-4798-4e32-9385-b42fc3db71ee', 'This is an amazing post', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '25bbd78e-103f-4ee4-a597-7ce5db110a72');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('9a77aada-567c-4e50-a76e-688763993e97', 'I completely agree with your point.', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '430b489e-b153-4434-b61e-7fdc4084c6a3');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('dfca4331-07ad-41b5-9fee-ef144f7512cb', 'Thanks for sharing this information.', '8901a314-f870-401f-a068-27941bc254a3', '173c7f4b-e2c3-4730-95e1-2555b1986144');
INSERT INTO "Comment" ("id", "content", "userId", "tweetId") VALUES ('505e2a66-8a54-4095-90e4-9de5847ba03e', 'Can you provide more details on this topic', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '22a4ff23-a78c-40a2-91f1-648342f127dc');

INSERT INTO "Hashtag" ("id", "name") VALUES ('18d6f562-cda3-463a-8ae5-ec52f45f6d52', 'TechTrends');
INSERT INTO "Hashtag" ("id", "name") VALUES ('da2e130e-c8c8-4b9a-84d4-93d3eb38bfa7', 'TravelGoals');
INSERT INTO "Hashtag" ("id", "name") VALUES ('c1475155-1576-4204-86b3-94a3618af4e3', 'TravelGoals');
INSERT INTO "Hashtag" ("id", "name") VALUES ('e8d92ac0-660b-44af-8079-5e3fd16292b1', 'TechTrends');
INSERT INTO "Hashtag" ("id", "name") VALUES ('dfa42d42-fa89-4495-8698-72a8e34907bc', 'FoodieLife');
INSERT INTO "Hashtag" ("id", "name") VALUES ('361605c0-e451-4e32-bde8-e79909c108e6', 'FitnessFreak');
INSERT INTO "Hashtag" ("id", "name") VALUES ('993a5a67-bb54-44b4-b1b9-748a60997266', 'MusicLover');
INSERT INTO "Hashtag" ("id", "name") VALUES ('86bdfd5a-f734-41f3-b721-c9bfc239d8e9', 'TravelGoals');
INSERT INTO "Hashtag" ("id", "name") VALUES ('c9206c23-852f-4fa9-a753-b4860bc626bb', 'TravelGoals');
INSERT INTO "Hashtag" ("id", "name") VALUES ('943eace0-0351-4578-8fd7-5755a1bbe98c', 'MusicLover');

INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('56572899-308f-4e2f-b16a-6ad754c3b9c6', 'e8d92ac0-660b-44af-8079-5e3fd16292b1', '9f0cfa41-7ff6-4efe-81fc-a5c17c7924ff');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('22a4ff23-a78c-40a2-91f1-648342f127dc', '993a5a67-bb54-44b4-b1b9-748a60997266', 'e96a6ca5-0a1c-4bd1-96a7-75d1cef88f98');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('25bbd78e-103f-4ee4-a597-7ce5db110a72', 'c9206c23-852f-4fa9-a753-b4860bc626bb', '71aac5ff-3917-41ea-be89-01213beca87e');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('430b489e-b153-4434-b61e-7fdc4084c6a3', '943eace0-0351-4578-8fd7-5755a1bbe98c', '4634421b-4bc0-4b8f-b882-24686f284e61');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('beada2d9-5b58-4f94-95d5-c0ae5394bcc3', 'e8d92ac0-660b-44af-8079-5e3fd16292b1', '015deb9d-4cbc-4362-a08a-8d53b0371233');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('22a4ff23-a78c-40a2-91f1-648342f127dc', 'c9206c23-852f-4fa9-a753-b4860bc626bb', '261076fb-8e3f-45f3-bd71-346c54d110b6');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('430b489e-b153-4434-b61e-7fdc4084c6a3', '86bdfd5a-f734-41f3-b721-c9bfc239d8e9', 'dbb77bee-0bbc-402b-b7fc-deb81fedb99c');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('22a4ff23-a78c-40a2-91f1-648342f127dc', 'da2e130e-c8c8-4b9a-84d4-93d3eb38bfa7', '38cd9cd1-b8d7-49f2-b6b1-f0d795b6e0b6');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('25bbd78e-103f-4ee4-a597-7ce5db110a72', '943eace0-0351-4578-8fd7-5755a1bbe98c', '156bd95c-c7eb-4d75-a001-8a7eaa1698a9');
INSERT INTO "TweetHashtag" ("tweetId", "hashtagId", "id") VALUES ('a7729418-d844-4bd4-a7aa-b31c233e6a2d', 'c1475155-1576-4204-86b3-94a3618af4e3', '91e9ab99-396b-48a0-bce4-97775186aa07');

INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('bf57b4ea-912f-4719-9623-650828be0b33', 'Cant believe its already Friday', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('7a53c2ad-87d9-4706-8c05-f4cdb4e53192', 'Just had the best coffee ever', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('970167e2-a6e1-4d3f-a130-c3f13417ab8d', 'What a beautiful sunset today', '67e392d2-3a28-4d31-940a-a64d3442ba70', '67e392d2-3a28-4d31-940a-a64d3442ba70');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('a0da6f91-6c1d-45ee-b642-f29397734a62', 'Just had the best coffee ever', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '3f4a258d-7a93-44ac-af57-a6891fdbf25b');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('a20963d4-6c50-4014-a132-89469de4f132', 'Feeling grateful for all the support.', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', 'd85dc2a5-413a-4b81-b691-19fc52980ae5');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('2740ddff-0064-4e98-a847-98e5de82fbc4', 'Cant believe its already Friday', '8901a314-f870-401f-a068-27941bc254a3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('7fcf424a-52d5-4e55-aadf-69e311d5ecfe', 'What a beautiful sunset today', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c90759d8-ee64-42e4-ab72-6a39f7814b07');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('9cffb36d-c4e7-4ba9-a310-4511dfd59303', 'Cant believe its already Friday', 'd85dc2a5-413a-4b81-b691-19fc52980ae5', '67e392d2-3a28-4d31-940a-a64d3442ba70');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('a1ec17f3-a475-42b8-a012-270914fe9b03', 'Cant believe its already Friday', 'c90759d8-ee64-42e4-ab72-6a39f7814b07', '8901a314-f870-401f-a068-27941bc254a3');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId") VALUES ('0c8a5cec-00f2-473b-8842-3692401991b7', 'Just had the best coffee ever', '4c12cbb0-fcc2-4f6e-a2df-08489cf256b0', '67e392d2-3a28-4d31-940a-a64d3442ba70');

INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('6f91fd43-f051-42df-9b74-e492ec7cc6a3', 'like', 'd1ef0712-dbdd-4198-a8c8-03671d050f22', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('332fd593-4d5a-4bc5-b67c-d210997d86a9', 'like', '5208bba0-c76c-4e45-ad78-ee0020313059', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('5b92a7b7-29c0-492c-92ad-90c3d8ec7bc3', 'mention', '2f4cf439-553e-42ac-9570-4d309cee5c17', 'd1f80112-11fc-4302-b18f-b1b585f227a9');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('5ac34d14-9307-4618-afe1-3d45ef0c0695', 'reply', '218261ad-d4ae-40c7-8768-b945fce5c65e', '139b32b1-1898-485b-a885-f8f339fca9dd');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('c1343896-5b9c-4a2a-9c7f-064341a17517', 'mention', '4cc94ad5-de79-4381-be9f-811a4005082a', '3f4a258d-7a93-44ac-af57-a6891fdbf25b');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('5ee9a053-7301-4ae5-a617-71e7f5eba592', 'mention', '86de4074-614e-484d-ac47-91c2fa371b81', '8901a314-f870-401f-a068-27941bc254a3');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('df26e7fc-e509-4554-aca1-80291174825d', 'like', '79aca3fd-12d6-46c9-8524-d7e7ef8bc87b', 'c90759d8-ee64-42e4-ab72-6a39f7814b07');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('495c4ec3-9b15-4bff-8893-91200ea34811', 'retweet', '2a9e262c-0904-4627-af7a-96fe56d0d0e6', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('a3a6f060-debb-4fcd-a06a-b9f8e0619685', 'follow', '72837722-ac17-48bc-bd2e-504587214824', 'e1993105-f85b-4df2-b23e-b431aaebb5cd');
INSERT INTO "Notification" ("id", "type", "referenceId", "userId") VALUES ('e5dcc425-ec52-4718-8f7f-0ac0e79a7763', 'like', '51872ddb-8663-46a6-9c43-8c232e03f185', '67e392d2-3a28-4d31-940a-a64d3442ba70');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
