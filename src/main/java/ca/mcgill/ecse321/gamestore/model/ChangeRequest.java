package ca.mcgill.ecse321.gamestore.model;/*PLEASE DO NOT EDIT THIS CODE*/
/*This code was generated using the UMPLE 1.35.0.7523.c616a4dce modeling language!*/


import jakarta.persistence.*;

import java.sql.Date;

// line 79 "model.ump"
// line 202 "model.ump"
@Entity
public class ChangeRequest
{
   @Id
   @GeneratedValue
  private int requestId;
  //------------------------
  // ENUMERATIONS
  //------------------------

  public enum RequestStatus { Approved, Declined, InProgress }

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //ChangeRequest Attributes
  private Date timeRequest;
  private RequestStatus status;

  //ChangeRequest Associations

  @ManyToOne
  private Employee requestCreator;

  @ManyToOne
  private Owner requestManager;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public ChangeRequest(Date aTimeRequest, RequestStatus aStatus,Owner aOwner,Employee aEmployee)
  {
    timeRequest = aTimeRequest;
    status = aStatus;

    if (!setRequestCreator(aEmployee))
    {
      throw new RuntimeException("Unable to create ChangeRequest due to aEmployee. See https://manual.umple.org?RE002ViolationofAssociationMultiplicity.html");
    }
    if (!setRequestManager(aOwner))
    {
      throw new RuntimeException("Unable to create ChangeRequest due to aOwner. See https://manual.umple.org?RE002ViolationofAssociationMultiplicity.html");
    }
  }
  public ChangeRequest(){}
  //------------------------
  // INTERFACE
  //------------------------
  public Integer getId() {
    return requestId;
  }

  // Setter for id
  public void setId(Integer id) {
    this.requestId = id;
  }
  public boolean setTimeRequest(Date aTimeRequest)
  {
    boolean wasSet = false;
    timeRequest = aTimeRequest;
    wasSet = true;
    return wasSet;
  }

  public boolean setStatus(RequestStatus aStatus)
  {
    boolean wasSet = false;
    status = aStatus;
    wasSet = true;
    return wasSet;
  }

  public Date getTimeRequest()
  {
    return timeRequest;
  }

  public RequestStatus getStatus()
  {
    return status;
  }
  /* Code from template association_GetOne */

  /* Code from template association_SetUnidirectionalOne */
  public Employee getRequestCreator()
  {
    return requestCreator;
  }
  public Owner getRequestManager()
  {
    return requestManager;
  }

  public boolean setRequestCreator(Employee aNewRequestCreator)
  {
    boolean wasSet = false;
    if (aNewRequestCreator != null)
    {
      requestCreator = aNewRequestCreator;
      wasSet = true;
    }
    return wasSet;
  }
  public boolean setRequestManager(Owner aNewRequestManager)
  {
    boolean wasSet = false;
    if (aNewRequestManager != null)
    {
      requestManager = aNewRequestManager;
      wasSet = true;
    }
    return wasSet;
  }

  public void delete()
  {
    requestManager= null;
    requestCreator=null;
  }


  public String toString()
  {
    return super.toString() + "["+ "]" + System.getProperties().getProperty("line.separator") +
            "  " + "timeRequest" + "=" + (getTimeRequest() != null ? !getTimeRequest().equals(this)  ? getTimeRequest().toString().replaceAll("  ","    ") : "this" : "null") + System.getProperties().getProperty("line.separator") +
            "  " + "status" + "=" + (getStatus() != null ? !getStatus().equals(this)  ? getStatus().toString().replaceAll("  ","    ") : "this" : "null") + System.getProperties().getProperty("line.separator")
    ;
  }
}