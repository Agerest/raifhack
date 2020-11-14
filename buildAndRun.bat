call mvn clean
call mvn compile
cd target/classes
mkdir public
cd ../..
cd frontend/build
xcopy /e /k /h /i .\ ..\..\target\classes\public
cd ../..
call mvn package
cd target
call java -jar iw-gdupo-restaurant-1.0-SNAPSHOT.jar