Node Api
=====
<h3>Routes</h3>
<p>method, /route {data} (result)</p>
* get /directors (returns all directors)
* post /directors {livstream_id: [Int]} (creates a new director)
* put /directors {livstream_id: [Int], attribute: [String], value: [string] } (update a directors attribute)
* delete /directors {livestream_id: [Int]} (deletes a director)
* get /directors/:id (displays a single director)

<p>Delete and put requests require authorizaion header equal to the md5 has of the full name of the director. Only favorite_camera and favorite_movies can be changed</p>



<p>To run tests (assuming a blank local Db)</p>

	npm update
	mocha
