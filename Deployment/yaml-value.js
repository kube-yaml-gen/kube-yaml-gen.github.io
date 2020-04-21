// ****
// It contains all YAML configuration properties of Kubernetes Deployment kind
// ****

// ----- Metadata fields -----
let deploymentMetadata = {
        annotations: [{}],
        clusterName: " ",
        creationTimestamp: " ",
        deletionGracePeriodSeconds:  0,
        deletionTimestamp: " ",
        finalizers: [''],
        generateName: " ",
        generation: 0,
        labels: [{}],
        managedFields: [{
            apiVersion: " ",
            fields: " ",
            manager: " ",
            operation: " ",
            time: " "
            }],
        name: " ",
        namespace: " ",
        ownerReferences: [{
            apiVersion: " ",
            blockOwnerDeletion: " ",
            controller: " ",
            kind: " ",
            name: " ",
            uid: " "
            }],
        resourceVersion: " ",
        selfLink: " ",
        uid: " "
    }


// ----- spec fields -----
let deploymentSpec = {
    minReadySeconds: 0,
    paused: " ",
    progressDeadlineSeconds: 0,
    replicas: 0,
    revisionHistoryLimit: 0,
    rollbackTo: {
       revision: 0,
          },
    selector: {
       matchExpressions: [{
          key: " ",
          operator: " ",
          values: [" "]
                }],
       matchLabels: [{}]
          },
    strategy: {
       rollingUpdate: {
          maxSurge: " ",
          maxUnavailable: " ",
                },
       type: " ",
      },
      template: {
        metadata: {
            annotations: [{}],
            clusterName: " ",
            creationTimestamp: " ",
            deletionGracePeriodSeconds:  0,
            deletionTimestamp: " ",
            finalizers: [''],
            generateName: " ",
            generation: 0,
            labels: [{}],
            managedFields: [{
                apiVersion: " ",
                fields: " ",
                manager: " ",
                operation: " ",
                time: " "
                }],
            name: " ",
            namespace: " ",
            ownerReferences: [{
                apiVersion: " ",
                blockOwnerDeletion: " ",
                controller: " ",
                kind: " ",
                name: " ",
                uid: " "
                }],
            resourceVersion: " ",
            selfLink: " ",
            uid: " "
        },
        spec: {
            activeDeadlineSeconds: 0,
            affinity: {
               nodeAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [{
                     preference: {
                        matchExpressions: [{
                           key: " ",
                           operator: " ",
                           values: [" "]
                                        }],
                        matchFields: [{	
                           key: " ",
                           operator: " ",
                           values: [" "]
                                      }]
                                  },
                     weight: 0
                              }],
                  requiredDuringSchedulingIgnoredDuringExecution: {
                     nodeSelectorTerms: [{
                        matchExpressions: [{
                           key: " "	,
                           operator: " "	,
                           values: [" "]	,
                                        }],
                        matchFields: [{	
                           key: " "	,
                           operator: " "	,
                           values: [" "],
                                    }]
                                }]
                            },
                          },
               podAffinity: {	
                  preferredDuringSchedulingIgnoredDuringExecution: [{	
                     podAffinityTerm: {
                        labelSelector: {	
                           matchExpressions: [{	
                              key: " "	,
                              operator: " ",	
                              values: [" "]	
                                            }],
                           matchLabels: [{}]	
                                        },
                        namespaces: [" "]	,
                        topologyKey: " "	
                                },
                     weight: 0	
                            }],
                  requiredDuringSchedulingIgnoredDuringExecution: [{	
                     labelSelector: {	
                        matchExpressions: [{	
                           key: " "	,
                           operator: " ",	
                           values: [" "]	
                                        }],
                        matchLabels: [{}]	
                                  },
                     namespaces: [" "]	,
                     topologyKey: " "	
                            }],
                  },
               podAntiAffinity: {	
                  preferredDuringSchedulingIgnoredDuringExecution: [{	
                     podAffinityTerm: {
                        labelSelector: {	
                           matchExpressions: [{	
                              key: " "	,
                              operator: " "	,
                              values: [" "]	
                                          }],
                           matchLabels: [{}]	
                                        },
                        namespaces: [" "]	,
                        topologyKey: " "	
                                  },
                     weight: 0	
                            }],
                  requiredDuringSchedulingIgnoredDuringExecution: [{	
                     labelSelector: {	
                        matchExpressions: [{	
                           key: " "	,
                           operator: " ",	
                           values: [" "]	
                                        }],
                        matchLabels: [{}]	
                                  },
                     namespaces: [" "]	,
                     topologyKey: " "	
                            }],
                  },
               },
            automountServiceAccountToken: " ",
            containers: [{	
                    args: [" "]	,
                    command: " "	,
                    env: [{	
                        name: " "	,
                        value: " ",	
                        valueFrom: {	
                          configMapKeyRef: {	
                              key: " "	,
                              name: " "	,
                              optional: " "	
                                },
                          fieldRef: {	
                              apiVersion: " "	,
                              fieldPath: " "	
                                },
                          resourceFieldRef: {	
                              containerName: " "	,
                              divisor: " "	,
                              resource: " "	
                              },
                          secretKeyRef: {	
                              key: " "	,
                              name: " "	,
                              optional: " "	
                                }
                          }
                        }],
                    envFrom: [{	
                        configMapRef: {	
                          name: " "	,
                          optional: " "	
                            },
                        prefix: " ",	
                        secretRef: {	
                          name: " ",	
                          optional: " "	
                            }
                        }],
                    image: " "	,
                    imagePullPolicy: " "	,
                    lifecycle: {	
                        postStart: {	
                          exec: {	
                              command: [" "]	
                                },
                          httpGet: {	
                              host: " "	,
                              httpHeaders: [{	
                                name: " "	,
                                value: " "	
                                }],
                              path: " "	,
                              port: " "	,
                              scheme: " "	
                              },
                          tcpSocket: {	
                              host: " "	,
                              port: " "	
                              }
                          },
                        preStop: {	
                          exec: {	
                              command: [" "]	
                              },
                          httpGet: {	
                              host: " "	,
                              httpHeaders: [{	
                                name: " "	,
                                value: " "	
                                  }],
                              path: " "	,
                              port: " "	,
                              scheme: " "	
                              },
                          tcpSocket: {	
                              host: " "	,
                              port: " "	
                              }
                          }
                      },
                    livenessProbe: {	
                        exec: {	
                          command: [" "]	
                            },
                        failureThreshold: 0	,
                        httpGet: {	
                          host: " "	,
                          httpHeaders: [{	
                              name: " "	,
                              value: " "	
                              }],
                          path: " "	,
                          port: " "	,
                          scheme: " ",	
                          },
                        initialDelaySeconds: 0	,
                        periodSeconds: 0	,
                        successThreshold: 0,	
                        tcpSocket: {	
                          host: " "	,
                          port: " "	
                          },
                        timeoutSeconds: 0	
                          },
                    name: " ",
                    ports: [{	
                        containerPort: 0	,
                        hostIP: " "	,
                        hostPort: 0	,
                        name: " "	,
                        protocol: " "	
                          }],
                    readinessProbe: {	
                        exec: {	
                          command: [" "]	
                              },
                        failureThreshold: 0	,
                        httpGet: {	
                          host: " "	,
                          httpHeaders: [{	
                              name: " "	,
                              value: " "	
                              }],
                          path: " "	,
                          port: " "	,
                          scheme: " "	,
                            },
                        initialDelaySeconds: 0	,
                        periodSeconds: 0	,
                        successThreshold: 0,	
                        tcpSocket: {	
                          host: " ",
                          port: " "
                            },
                        timeoutSeconds: 0	
                        },
                    resources: {	
                        limits: [{}]	,
                        requests: [{}]	
                        },
                    securityContext: {	
                        allowPrivilegeEscalation: " "	,
                        capabilities: {	
                          add: [" "]	,
                          drop: [" "]	
                            },
                        privileged: " "	,
                        procMount: " "	,
                        readOnlyRootFilesystem: " "	,
                        runAsGroup: 0 ,
                        runAsNonRoot: " ",	
                        runAsUser: 0	,
                        seLinuxOptions: {	
                          level: " "	,
                          role: " "	,
                          type: " "	,
                          user: " "	,
                          }
                        },
                    stdin: " "	,
                    stdinOnce: " "	,
                    terminationMessagePath: " "	,
                    terminationMessagePolicy: " ",	
                    tty: " "	,
                    volumeDevices: [{	
                        devicePath: " "	,
                        name: " "	
                        }],
                    volumeMounts: [{	
                        mountPath: " "	,
                        mountPropagation: " "	,
                        name: " "	,
                        readOnly: " "	,
                        subPath: " "	,
                        subPathExpr: " "	,
                        }],
                    workingDir: " "	
                    }],
            dnsConfig: {	
                nameservers: [" "]	,
                options: [{	
                  name: " "	,
                  value: " "	
                  }],
                searches: [" "]	
                },
            dnsPolicy: " ",
            enableServiceLinks: " ",
            hostAliases: [{	
                hostnames: [" "]	,
                ip: " "	
                }],
            hostIPC: " ",
            hostNetwork: " ",
            hostPID: " ",
            hostname: " "	,
            imagePullSecrets: [{	
                name: " "	
              }],
            initContainers: [{	
                    args: [" "]	,
                    command: " "	,
                    env: [{	
                        name: " "	,
                        value: " ",	
                        valueFrom: {	
                          configMapKeyRef: {	
                              key: " "	,
                              name: " "	,
                              optional: " "	
                                },
                          fieldRef: {	
                              apiVersion: " "	,
                              fieldPath: " "	
                                },
                          resourceFieldRef: {	
                              containerName: " "	,
                              divisor: " "	,
                              resource: " "	
                              },
                          secretKeyRef: {	
                              key: " "	,
                              name: " "	,
                              optional: " "	
                                }
                          }
                        }],
                    envFrom: [{	
                        configMapRef: {	
                          name: " "	,
                          optional: " "	
                            },
                        prefix: " ",	
                        secretRef: {	
                          name: " ",	
                          optional: " "	
                            }
                        }],
                    image: " "	,
                    imagePullPolicy: " "	,
                    lifecycle: {	
                        postStart: {	
                          exec: {	
                              command: [" "]	
                                },
                          httpGet: {	
                              host: " "	,
                              httpHeaders: [{	
                                name: " "	,
                                value: " "	
                                }],
                              path: " "	,
                              port: " "	,
                              scheme: " "	
                              },
                          tcpSocket: {	
                              host: " "	,
                              port: " "	
                              }
                          },
                        preStop: {	
                          exec: {	
                              command: [" "]	
                              },
                          httpGet: {	
                              host: " "	,
                              httpHeaders: [{	
                                name: " "	,
                                value: " "	
                                  }],
                              path: " "	,
                              port: " "	,
                              scheme: " "	
                              },
                          tcpSocket: {	
                              host: " "	,
                              port: " "	
                              }
                          }
                      },
                    livenessProbe: {	
                        exec: {	
                          command: [" "]	
                            },
                        failureThreshold: 0	,
                        httpGet: {	
                          host: " "	,
                          httpHeaders: [{	
                              name: " "	,
                              value: " "	
                              }],
                          path: " "	,
                          port: " "	,
                          scheme: " ",	
                          },
                        initialDelaySeconds: 0	,
                        periodSeconds: 0	,
                        successThreshold: 0,	
                        tcpSocket: {	
                          host: " "	,
                          port: " "	
                          },
                        timeoutSeconds: 0	
                          },
                    name: " ",
                    ports: [{	
                        containerPort: 0	,
                        hostIP: " "	,
                        hostPort: 0	,
                        name: " "	,
                        protocol: " "	
                          }],
                    readinessProbe: {	
                        exec: {	
                          command: [" "]	
                              },
                        failureThreshold: 0	,
                        httpGet: {	
                          host: " "	,
                          httpHeaders: [{	
                              name: " "	,
                              value: " "	
                              }],
                          path: " "	,
                          port: " "	,
                          scheme: " "	,
                            },
                        initialDelaySeconds: 0	,
                        periodSeconds: 0	,
                        successThreshold: 0,	
                        tcpSocket: {	
                          host: " ",
                          port: " "
                            },
                        timeoutSeconds: 0	
                        },
                    resources: {	
                        limits: [{}]	,
                        requests: [{}]	
                        },
                    securityContext: {	
                        allowPrivilegeEscalation: " "	,
                        capabilities: {	
                          add: [" "]	,
                          drop: [" "]	
                            },
                        privileged: " "	,
                        procMount: " "	,
                        readOnlyRootFilesystem: " "	,
                        runAsGroup: 0 ,
                        runAsNonRoot: " ",	
                        runAsUser: 0	,
                        seLinuxOptions: {	
                          level: " "	,
                          role: " "	,
                          type: " "	,
                          user: " "	,
                          }
                        },
                    stdin: " "	,
                    stdinOnce: " "	,
                    terminationMessagePath: " "	,
                    terminationMessagePolicy: " ",	
                    tty: " "	,
                    volumeDevices: [{	
                        devicePath: " "	,
                        name: " "	
                        }],
                    volumeMounts: [{	
                        mountPath: " "	,
                        mountPropagation: " "	,
                        name: " "	,
                        readOnly: " "	,
                        subPath: " "	,
                        subPathExpr: " "	,
                        }],
                    workingDir: " "	
                    }],
            nodeName: " "	,
            nodeSelector: [{ }],	
            priority: 0	,
            priorityClassName: " ",
            readinessGates: [{	
                conditionType: " "	
                }],
            restartPolicy: " ",
            runtimeClassName: " ",	
            schedulerName: " " 	,
            securityContext: {	
                fsGroup: 0	,
                runAsGroup: 0,	
                runAsNonRoot: " ",	
                runAsUser: 0	,
                seLinuxOptions: {	
                  level: " ",
                  role: " ",
                  type: " ",	
                  user: " "	
                  },
                supplementalGroups: [" "],
                sysctls: [{	
                  name: " ",
                  value: " ",	
                  }]
                },
            serviceAccount: " "	,
            serviceAccountName: " "	,
            shareProcessNamespace: " "	,
            subdomain: " "	,
            terminationGracePeriodSeconds: 0	,
            tolerations: [{	
                effect: " "	,
                key: " "	,
                operator: " ",	
                tolerationSeconds: 0	,
                value: " "	
                }],
            volumes: [{	
                awsElasticBlockStore: {	
                  fsType: " "	,
                  partition: 0,	
                  readOnly: " ",	
                  volumeID: " "	
                    },
                azureDisk: {	
                  cachingMode: " "	,
                  diskName: " "	,
                  diskURI: " "	,
                  fsType: " "	,
                  kind: " "	,
                  readOnly: " "	
                  },
                azureFile: {	
                  readOnly: " "	,
                  secretName: " ",	
                  shareName: " "	,
                  },
                cephfs: {	
                  monitors: [" "]	,
                  path: " "	,
                  readOnly: " "	,
                  secretFile: " ",	
                  secretRef: {	
                      name: " "	
                      },
                  user: " "	
                  },
                cinder: {	
                  fsType: " "	,
                  readOnly: " ",	
                  secretRef: {	
                      name: " "	
                      },
                  volumeID: " "	,
                  },
                configMap: {	
                  defaultMode: 0	,
                  items: [{	
                      key: " "	,
                      mode: 0	,
                      path: " ",	
                      }],
                  name: " "	,
                  optional: " "	,
                  },
                csi: {	
                  driver: " "	,
                  fsType: " "	,
                  nodePublishSecretRef: {	
                      name: " "	
                      },
                  readOnly: " "	,
                  volumeAttributes: [{}]	
                  },
                downwardAPI: {	
                  defaultMode: 0	,
                  items: [{	
                      fieldRef: {	
                        apiVersion: " ",
                        fieldPath	: " "
                        },
                      mode: 0	,
                      path: " ",	
                      resourceFieldRef: {	
                        containerName: " "	,
                        divisor: " "	,
                        resource: " "	
                        }
                    }]
                  },
                emptyDir: {	
                  medium: " "	,
                  sizeLimit: " "	
                  },
                fc: {	
                  fsType: " "	,
                  lun: 0	,
                  readOnly: " "	,
                  targetWWNs: [" "]	,
                  wwids: [" "]	
                  },
                flexVolume: {	
                  driver: " "	,
                  fsType: " "	,
                  options: [{}]	,
                  readOnly: " "	,
                  secretRef: {	
                      name: " "	
                      }    
                  },
                flocker: {	
                  datasetName: " "	,
                  datasetUUID: " "	
                    },
                gcePersistentDisk: {	
                  fsType: " "	,
                  partition: 0,	
                  pdName: " "	,
                  readOnly: " "	
                    },
                gitRepo: {	
                  directory: " "	,
                  repository: " "	,
                  revision: " "	
                    },
                glusterfs: {	
                  endpoints: " "	,
                  path: " "	,
                  readOnly: " "	
                    },
                hostPath: {	
                  path: " "	,
                  type: " "	,
                  },
                iscsi: {	
                  chapAuthDiscovery: " "	,
                  chapAuthSession: " "	,
                  fsType: " "	,
                  initiatorName: " "	,
                  iqn: " "	,
                  iscsiInterface: " "	,
                  lun: 0	,
                  portals: [" "]	,
                  readOnly: " "	,
                  secretRef: {	
                      name: " "	
                      },
                  targetPortal: " "	
                  },
                name: " "	,
                nfs: {	
                  path: " ",	
                  readOnly: " "	,
                  server: " "	,
                  },
                persistentVolumeClaim: {	
                  claimName: " "	,
                  readOnly: " "	
                    },
                photonPersistentDisk: {	
                  fsType: " "	,
                  pdID: " "	
                  },
                portworxVolume: {	
                  fsType: " "	,
                  readOnly: " ",	
                  volumeID: " "	
                    },
                projected: {	
                  defaultMode: 0	,
                  sources: [{	
                      configMap: {	
                        items: [{	
                            key: " ",	
                            mode: " ",	
                            path: " "	
                            }],
                        name: " "	,
                        optional: " "	
                        },
                      downwardAPI: {	
                        items: [{	
                            fieldRef: {	
                              apiVersion: " "	,
                              fieldPath: " "	
                                },
                            mode: 0	,
                            path: " ",	
                            resourceFieldRef: {	
                              containerName: " "	,
                              divisor: " "	,
                              resource: " "	,
                              }
                            }]
                        },
                      secret: {	
                        items: [{	
                            key: " "	,
                            mode: 0	,
                            path: " ",	
                            }],
                        name: " "	,
                        optional: " ",	
                      },
                      serviceAccountToken: {
                        audience: " ",
                        expirationSeconds: 0,
                        path: " "
                        }
                      }]
                    },
                quobyte: {	
                  group: " ",
                  readOnly: " ",
                  registry: " ",
                  tenant: " ",
                  user: " ",
                  volume: " "
                  },
                rbd: {
                  fsType: " ",
                  image: " ",
                  keyring: " ",
                  monitors: [" "],
                  pool: " ",
                  readOnly: " ",
                  secretRef: {
                      name: " "
                      },
                  user: " "
                  },
                scaleIO: {
                  fsType: " ",
                  gateway: " ",
                  protectionDomain: " ",
                  readOnly: " ",
                  secretRef: {
                      name: " "
                      },
                  sslEnabled: " ",
                  storageMode: " ",
                  storagePool: " ",
                  system: " ",
                  volumeName: " "
                  },
                secret: {
                  defaultMode: 0,
                  items: [{
                      key: " ",
                      mode: 0,
                      path: " "
                      }],
                  optional: " ",
                  secretName: " "
                  },
                storageos: {
                  fsType:	" ",
                  readOnly: " ",
                  secretRef: {
                      name: " "
                      },
                  volumeName: " ",
                  volumeNamespace: " "
                  },
                vsphereVolume: {
                  fsType: " ",
                  storagePolicyID: " ",
                  storagePolicyName: " ",
                  volumePath: " "
                  }
                }]
            }
        }
      }


// ----- status fields -----
let deploymentStatus = {
    availableReplicas: 0,
    collisionCount: 0,
    conditions: [{
       lastTransitionTime: " ",
       lastUpdateTime: " ",
       message: " ",
       reason: " ",
       status: " ",
       type: " "
          }],
    observedGeneration: 0,
    readyReplicas: 0,
    replicas: 0,
    unavailableReplicas: 0,
    updatedReplicas: 0
    }
    