create procedure sys.sp_updateextendedproperty  
 @name sysname,  
 @value sql_variant   = NULL,  
 @level0type varchar(128) = NULL,  
 @level0name sysname   = NULL,  
 @level1type varchar(128) = NULL,  
 @level1name sysname   = NULL,  
 @level2type varchar(128) = NULL,  
 @level2name sysname   = NULL  
as  
  
 declare @ret int  
  
 if datalength(@value) > 7500  
 begin  
  raiserror(15097,-1,-1)  
  return 1  
 end  
  
 if @name is null  
 begin  
  raiserror(15600,-1,-1,'sp_updateextendedproperty')  
  return (1)  
 end  
  
 execute @ret = sys.sp_validname @name  
 if (@ret <> 0)  
 begin  
  raiserror(15600,-1,-1,'sp_updateextendedproperty')  
  return (1)  
 end  
   
 BEGIN TRANSACTION  
  
 BEGIN TRY  
  EXEC %%ExtendedPropertySet().UpdateValue(Name = @name, Value = @value, Level0type = @level0type, Level0name = @level0name, Level1type = @level1type, Level1name = @level1name, Level2type = @level2type, Level2name = @level2name)   
 END TRY  
  
 BEGIN CATCH  
  if (xact_state() <> 0) ROLLBACK TRANSACTION;  
  THROW  
 END CATCH  
    
 COMMIT TRANSACTION  
 return (0)
 
 
   