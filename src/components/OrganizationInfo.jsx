import React from "react";

function OrganizationInfo() {
    const organizations = [{name:"KILLAR.se", img: "", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea impedit, magnam nostrum accusamus ducimus, cumque exercitationem, eos sit aliquid voluptate itaque illo consectetur pariatur suscipit perspiciatis provident magni eaque." },{name:"MÄN", img: "", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea impedit, magnam nostrum accusamus ducimus, cumque exercitationem, eos sit aliquid voluptate itaque illo consectetur pariatur suscipit perspiciatis provident magni eaque." }, {name:"Sverok", img: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea impedit, magnam nostrum accusamus ducimus, cumque exercitationem, eos sit aliquid voluptate itaque illo consectetur pariatur suscipit perspiciatis provident magni eaque." } ];


  return (<div className="flex">
    {organizations.map((organization) => {
        return (
            <div className="w-1/3 rounded shadow-lg p-6 m-4" key={organization.name}>
    <h3 className="text-xl">{organization.name}</h3>
    <p>{organization.description}</p>
</div>
        )
    })}
  </div>);
}

export default OrganizationInfo;