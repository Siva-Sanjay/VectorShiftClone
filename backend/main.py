from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


#creating a model to store incoming data
class flowdata(BaseModel):
    nodes: list
    edges: list


@app.post('/pipelines/parse')
async def parse_pipeline(data: flowdata):
    edgelist = data.edges
    source=[]
    target=[]
    dag="True"
    #creating 2 seperate lists of sources and target nodes
    for edg in edgelist:
        source.append(edg[0])
        target.append(edg[1])

    #eleminating leaflets
    i=0
    while i < len(source):
        if target[i] not in source:
            target.pop(i)
            source.pop(i)
            i=-1
        i=i+1

    
    if len(source)>0:
        dag="False"

    return {'num_node':len(data.nodes),'num_edges':len(data.edges),"is_dag":dag }
