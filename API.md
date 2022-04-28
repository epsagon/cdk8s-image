# API Reference

**Classes**

Name|Description
----|-----------
[Image](#udp-cdk8s-image-image)|Represents a docker image built during synthesis from a context directory (`dir`) with a `Dockerfile`.


**Structs**

Name|Description
----|-----------
[BuildArg](#udp-cdk8s-image-buildarg)|Build arg to pass to the docker build.
[ImageProps](#udp-cdk8s-image-imageprops)|Props for `Image`.



## class Image  <a id="udp-cdk8s-image-image"></a>

Represents a docker image built during synthesis from a context directory (`dir`) with a `Dockerfile`.

The image will be built using `docker build` and then pushed through `docker
push`. The URL of the pushed image can be accessed through `image.url`.

If you push to a registry other then docker hub, you can specify the registry
URL through the `registry` option.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new Image(scope: Construct, id: string, props: ImageProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ImageProps](#udp-cdk8s-image-imageprops)</code>)  *No description*
  * **dir** (<code>string</code>)  The docker build context directory (where `Dockerfile` is). 
  * **buildArgs** (<code>Array<[BuildArg](#udp-cdk8s-image-buildarg)></code>)  List of build args to pass to the build action. __*Optional*__
  * **registry** (<code>string</code>)  The registry URL to use. __*Default*__: "docker.io/library"



### Properties


Name | Type | Description 
-----|------|-------------
**url** | <code>string</code> | The image URL to use in order to pull this instance of the image.



## struct BuildArg  <a id="udp-cdk8s-image-buildarg"></a>


Build arg to pass to the docker build.



Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | the name of the build arg.
**value** | <code>string</code> | the value of the build arg.



## struct ImageProps  <a id="udp-cdk8s-image-imageprops"></a>


Props for `Image`.



Name | Type | Description 
-----|------|-------------
**dir** | <code>string</code> | The docker build context directory (where `Dockerfile` is).
**buildArgs**? | <code>Array<[BuildArg](#udp-cdk8s-image-buildarg)></code> | List of build args to pass to the build action.<br/>__*Optional*__
**registry**? | <code>string</code> | The registry URL to use.<br/>__*Default*__: "docker.io/library"



