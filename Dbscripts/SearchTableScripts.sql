
-----SEARCH TABLE AND COLUMNS 
SELECT 
		SCHEMA_NAME(so.SCHEMA_ID) AS 'schema',
		so.name AS 'table',
		Coalesce(sc.name, '--') AS 'column',
		sc.is_nullable AS 'id',
		t.name AS 'dataType',
		sep.value AS 'description' ,
		sc.column_id,
		sep.minor_id,
		sc.object_id
FROM	sys.objects so INNER JOIN  sys.columns sc ON so.object_id = sc.object_id 
		INNER JOIN sys.types t ON sc.user_type_id = t.user_type_id 
		LEFT OUTER JOIN sys.extended_properties sep ON sep.major_id = so.object_id AND sep.minor_id = sc.column_id
WHERE so.name = 'LCMembershipTracking' AND  sc.object_id IN (SELECT object_id FROM  sys.columns WHERE name = 'LCPersonId') AND so.type = 'U'


---	

